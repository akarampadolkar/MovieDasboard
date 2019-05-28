import { Component, OnInit , Input} from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Movie } from '.././movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  imageBaseURl = 'https://image.tmdb.org/t/p/w500/';  
  movie : any;
  constructor(
    private dataserviceService : DataserviceService
  ) { }
    

  ngOnInit() {
    this.getSelectedMovie();
  }  

 // @Input() movie: Movie; 


  getSelectedMovie():void{    
    this.movie = this.dataserviceService.getData(); 
    
  }
}
