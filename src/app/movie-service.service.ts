import { Injectable } from '@angular/core';
import { MOVIES } from './mock.movies';
import { Movie } from './movie';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map,catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  constructor(private http: HttpClient) { }

  /*  getMovies(): Observable<Movie[]> {
      return of(MOVIES);
    }*/

    private movieUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=44e0a4e6bf0fd620f823de30916c528a&language=en-US&page=1';
    getMoviesList (): Observable<any> {
      return this.http.get(this.movieUrl).pipe(map((res) => res),
      catchError((error) => error));
    }  
}
