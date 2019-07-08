import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {

  imageBaseURl = 'https://image.tmdb.org/t/p/w500/';  
  people : any;
  data : any;  
  constructor(
    private dataserviceService : DataserviceService
  ) { }
    

  ngOnInit() {
    this.getSelectedPeople();
  }  

 // @Input() movie: Movie; 


  getSelectedPeople():void{    
    this.data = this.dataserviceService.getData();     
    this.people = this.data.item;
  }

}
