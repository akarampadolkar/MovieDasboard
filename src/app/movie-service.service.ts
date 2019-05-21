import { Injectable } from '@angular/core';
import { MOVIES } from './mock.movies';
import { Movie } from './movie';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http: HttpClient) { }

    getMovies(): Observable<Movie[]> {
      return of(MOVIES);
    }
   
}
