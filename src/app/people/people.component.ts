import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponentComponent } from './../modal-component/modal-component.component';
import { DataserviceService } from '../dataservice.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  peopleList : any;
  imageBaseURl = 'https://image.tmdb.org/t/p/w500/';
  modalRef : BsModalRef;

  currentPage = 1;
  page: number; 
  smallnumPages = 0;  
  isReadonly: boolean = true;
  selectedPeople : any;

  constructor(
    private movieServiceService:MovieServiceService,
    private ngxLoader: NgxUiLoaderService,
    private modalService : BsModalService, 
    private dataserviceService : DataserviceService
    ) { }

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

  //modal
  openModalWithComponent(people: any) {    
    const initialState = {  title: people.name };
    this.selectedPeople = people;        
    this.dataserviceService.setData(this.selectedPeople,'people');
    this.modalRef = this.modalService.show(ModalComponentComponent,{initialState});
  }
}
