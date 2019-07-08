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
  data : any;
  constructor(
    private dataserviceService : DataserviceService
  ) { }
    

  ngOnInit() {
    this.getSelectedMovie();
  }  

 // @Input() movie: Movie; 


  getSelectedMovie():void{    
    this.data = this.dataserviceService.getData(); 
    this.movie = this.data.item;
  }
}
