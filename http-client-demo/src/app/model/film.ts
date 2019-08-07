export class Film {
  id: number = 0;
  title: string = '';
  release: number = 1990;
  actor: string = '';
}
//jobb classként megadni, mint interfaceként, lehet bővíteni (default érték),
//defaut érték hasznos, nem szállnak el a metódusok, pipeok, ha nincs értéke,mert
//default érték lesz és nem undefined
