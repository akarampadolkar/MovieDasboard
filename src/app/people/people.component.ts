import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  peopleList : any;
  imageBaseURl = 'https://image.tmdb.org/t/p/w500/';

  currentPage = 1;
  page: number; 
  smallnumPages = 0;

  constructor(private movieServiceService:MovieServiceService,private ngxLoader: NgxUiLoaderService) { }

  ngOnInit() {
    this.getPeopleList('');
  }

  getPeopleList(pageNo):void{    
    this.ngxLoader.start();
    this.movieServiceService.getPoepleList(pageNo.page)
    .subscribe((res) => {
      this.peopleList = res.results;
      this.ngxLoader.stop();
    },(error) => console.log(error));
  };

  
}
