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
    this.getHeroes();
  }

  movies: Movie[];

  getHeroes(): void {
     this.movieServiceService.getMovies()
    .subscribe(movies => this.movies = movies);    
  }

  //showing selected movie
  selectedMovie: Movie;
  onSelect(movie: Movie): void {    
    this.selectedMovie = movie;
  }

}
