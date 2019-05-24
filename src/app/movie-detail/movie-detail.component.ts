import { Component, OnInit , Input} from '@angular/core';
import { Movie } from '.././movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  imageBaseURl = 'https://image.tmdb.org/t/p/w500/';
  constructor() { }

  ngOnInit() {
  }  
  @Input() movie: Movie;  
}
