import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../model/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  jsonUrl: string = 'http://localhost:3000/film';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Film[]> {
    return this.http.get<Film[]>(this.jsonUrl);
  }
  getOne(id: number): Observable<Film> {
    return this.http.get<Film>(`${this.jsonUrl}/${id}`);
  }
  //egy filmet iratunk ki.


  create(film: Film): Observable<Film> {
    return this.http.post<Film>(this.jsonUrl, film)
  }
  //post is observable-t ad vissza, anyt, de mi megadjuk h Film typusú osztályt adjon vissza
  //a film paraméter egy Film osztályú elem, aminek nincs id-ja, mert azt generál

  update(film: Film): Observable<Film> {
    return this.http.put<Film>(`${this.jsonUrl}/${film.id}`, film)
  }
  //módosítás film paraméter: mire cserélje
  //itt kell az id, hogy tudja melyiket kel frissítenie.Az id a paraméter film id-je (film.id)

  remove(id: number): Observable<Film> {
    return this.http.delete<Film>(`${this.jsonUrl}/${id}`);
  }
}
