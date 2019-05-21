import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { Movie } from '.././movie';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private movieServiceService: MovieServiceService) { }

  ngOnInit() {
    //service call for getting all movies
  //  this.getMovies();
    this.getMoviesList();
  }

  imageBaseURl = 'https://image.tmdb.org/t/p/w500/';
  //movies: Movie[];
  moviesList : any;

 /* getMovies(): void {
     this.movieServiceService.getMovies()
    .subscribe(movies => this.movies = movies);    
  }*/

  getMoviesList():void{
    this.movieServiceService.getMoviesList()
    .subscribe((item) => this.moviesList = item.results);        
  }

  //showing selected movie
  selectedMovie: any;
  onSelect(movie: any): void {    
    this.selectedMovie = movie;
  }

}
