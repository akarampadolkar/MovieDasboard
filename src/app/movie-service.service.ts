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

    private headers = new HttpHeaders({
      'Accept': 'application/json'
    });

    private movieUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=44e0a4e6bf0fd620f823de30916c528a&language=en-US&page=1';
    private tvShowUrl = 'https://api.themoviedb.org/3/tv/airing_today?api_key=44e0a4e6bf0fd620f823de30916c528a&language=en-US&page=1';
    private peopleUrl = 'https://api.themoviedb.org/3/person/popular?api_key=44e0a4e6bf0fd620f823de30916c528a&language=en-US';
    
    getMoviesList (): Observable<any> {
      return this.http.get(this.movieUrl, {
        headers:this.headers
      });      
    };

    getTvShowList (): Observable<any>{
      return this.http.get(this.tvShowUrl,{
        headers:this.headers
      });
    };

    getPoepleList (pageNo) : Observable<any>{      
      let paginationUrl = '';
      paginationUrl = pageNo ? this.peopleUrl + '&page='+pageNo : this.peopleUrl + '&page=1';
      
      return this.http.get(paginationUrl,{
        headers:this.headers
      });
    };
    
}
