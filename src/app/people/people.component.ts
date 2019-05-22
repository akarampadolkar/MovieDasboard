import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(private movieServiceService:MovieServiceService) { }

  peopleList : any;
  imageBaseURl = 'https://image.tmdb.org/t/p/w500/';
  ngOnInit() {
    this.getPeopleList('');
  }

  getPeopleList(pageNo):void{
    this.movieServiceService.getPoepleList(pageNo)
    .subscribe((res) => this.peopleList = res.results);
  }
}
