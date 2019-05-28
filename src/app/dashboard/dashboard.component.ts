import { Component, OnInit, TemplateRef } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DataserviceService } from '../dataservice.service';
import { Movie } from '.././movie';
import { ModalComponentComponent } from './../modal-component/modal-component.component'

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
  modalRef : BsModalRef;
  
  titles = [];
  selectedMovie : any;

  constructor(
      private movieServiceService: MovieServiceService ,  
      private ngxLoader: NgxUiLoaderService,   
      private modalService : BsModalService,   
      private dataserviceService : DataserviceService
      ) { 
        
      }
  

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
  /*onSelect(movie: any): void {    
    this.selectedMovie = movie;
  }*/

  //modal
  openModalWithComponent(movie: any) {
    const initialState = {  title: movie.original_title };
    this.selectedMovie = movie;        
    this.dataserviceService.setData(this.selectedMovie);
    this.modalRef = this.modalService.show(ModalComponentComponent,{initialState});
  }
}
