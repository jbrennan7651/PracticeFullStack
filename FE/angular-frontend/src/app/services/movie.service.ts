import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from '../movie';



@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseURL = "http://localhost:8080/movies"

  constructor(private httpClient: HttpClient,
    private router : Router) { }

  readAll(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.baseURL);
  }

  readById(id: number): Observable<Movie>{
    return this.httpClient.get<Movie>(`${this.baseURL}/${id}`);
  }

  create(data: Movie): Observable<Object>{
    return this.httpClient.post(this.baseURL, data);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  update(id : number, movie: Movie): Observable<any>{
    return this.httpClient.put<any>(`${this.baseURL}/${id}`, movie)
  }
 
}
