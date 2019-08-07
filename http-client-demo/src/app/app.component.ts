import { Component, OnInit } from '@angular/core';
import { FilmService } from './service/film.service';
import { Film } from './model/film';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'http-client-demo';
  filmList: Film[] = [];
  newFilm: Film = new Film();
  filterPhrase: string = '';
  orderKey: string = '';
  changeCounter: number = 0;
  orderDirection: number = 1;
  //ChangeCounter, mindig hozzáadunk egyet amikor valami vltozás történik(create,update,remove)
  //mivel a változó megváltozik, ezért a pipe észreveszi hogy új tömb van és azzal dolgozik. 
  constructor(
    private filmService: FilmService
  ) {

  }

  ngOnInit() {
    this.filmService.getAll().subscribe(
      films => this.filmList = films  //serverről kapott adatokat a filmList tömbbe mentjük el
    )
  }
  onUpdate(i: Film) {
    this.filmService.update(i).subscribe(
      mess => this.changeCounter++
    );
  };
  onRemove(i: Film) {
    this.filmService.remove(i.id).subscribe(
      response => {
        let index = this.filmList.indexOf(i);
        this.filmList.splice(index, 1);
        //kitöröljük a serverről, majd a filmList tömbből is kivágjuk, így frissítés nélkül is látjuk az eredményt.
        this.changeCounter++;
      },
      err => console.error(err),
    )
  }
  // az egész i. filmet adjuk át a kattintás, majd z onRemoveban meghívjuk a filmService remove metódusát, 
  //itt már az i. film id-ját adjuk át.

  onCreate() {
    this.filmService.create(this.newFilm).subscribe(
      response => {
        this.filmList.push(response);
        this.newFilm = new Film();
        this.changeCounter++;
      },
      err => console.error(err),
    )
  }
  onOrderKey(key: string): void {
    if (key === this.orderKey) {
      this.orderDirection = this.orderDirection == 1 ? -1 : 1
    } else {
      this.orderDirection = 1;
    }
    this.orderKey = key;
  }
}
