import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MovieServiceService } from '../movie-service.service';
import { Movie } from '.././movie';

import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  imageBaseURl = 'https://image.tmdb.org/t/p/w500/';
  //movies: Movie[];
  moviesList : any;
  modalRef: BsModalRef;

  titles = [];

  loadingIcon = true;
  constructor(
      private movieServiceService: MovieServiceService ,  
      private ngxLoader: NgxUiLoaderService,
      private modalService: BsModalService
      ) { }
  

  ngOnInit() {
    //service call for getting all movies
  //  this.getMovies();    
    this.getMoviesList();    
  }

 /* getMovies(): void {
     this.movieServiceService.getMovies()
    .subscribe(movies => this.movies = movies);    
  }*/

  getMoviesList():void{
    this.ngxLoader.start();
    this.movieServiceService.getMoviesList()
    .subscribe((item) => {
      this.moviesList = item.results;
      this.ngxLoader.stop();

      item.results.map((rel) =>{        
        this.titles.push(rel.original_title);
      });
      
    },(error) => console.log(error));        
  }

  //showing selected movie
  selectedMovie: any;
  /*onSelect(movie: any): void {    
    this.selectedMovie = movie;
  }*/

  //modal
  openModal(template: TemplateRef<any>,movie:any) {
    this.selectedMovie = movie;
    this.modalRef = this.modalService.show(template);
  }
}
