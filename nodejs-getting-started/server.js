// Loading required modules.
const http = require('http');
const fs = require('fs');
const port = 3210;

// post:a kliens oldalon stringgé alakítom az objektumot, majd a server oldalon visszaalakítom objektummá.
class PostHandler {
    constructor(req, res) {
        // Ide gyűjtjük az adatcsomagokat.
        this.allData = '';

        // Ez a függvény fut le, ha megérkezik egy adatcsomag.
        req.on('data', (chunk) => {
            this.allData += chunk;
        });

        // Megjött az összes adat.
        req.on('end', () => {
            this.allData = JSON.parse(this.allData);
            //  kapott adatot parsolom objektummá
            fs.readFile('./json/users.json', 'utf8', (err, jsonString) => {
                let users = JSON.parse(jsonString);
                users.push(this.allData);
                // beolvasom a tárolót, azt is objektummá alakítom
                // ez csak a memóriában történik meg, fájlba nem írja bele.
                fs.writeFile('./json/users.json', JSON.stringify(users, null, 4), 'utf8', (err) => {
                    res.end('Köszi.');// ezt a kliens oldalon event.target.response néven érjük el
                })
            })
            // writeFile-nál a callbackfüggvénynél csak az error a paraméter, mert nincs visszatérő adat amit fel kéne dolgozni, csak hibakezelés
            //ettől még lehet sikeres lefutás esetén is függvényhívás (itt:res.end(...))
            // beleírjuk a fájlba , először stringgé alakítjuk , mert JSON fájlként szeretnénk menteni
            console.log(this.allData);
        });
    }
}

class GetHandler {
    constructor(req, res) {
        let fileName = req.url == '/' ? '/index.html' : `${req.url}.html`;
        let filePath = `./view${fileName}`;

        console.time('filereadtime');
        console.time('testtime');
        // (error first callback)
        fs.readFile(filePath, 'utf8', (err, fileContent) => {
            if (err) {
                console.error(err);
                return res.end('404');
            }
            console.timeEnd('filereadtime');
            res.end(fileContent);
        });

        console.timeEnd('testtime');
    }
}



// Init server.
const server = http.createServer((req, res) => {

    switch (req.method.toLowerCase()) {
        // get|post|put|delete
        case 'get':
            new GetHandler(req, res);
            break;
        case 'post':
            new PostHandler(req, res);
            break;
        default:
            res.end('Hello');
    }
});

// Set server port.
server.listen(port, () => {
    console.log(`Server is listening in ${port} port.`);
});