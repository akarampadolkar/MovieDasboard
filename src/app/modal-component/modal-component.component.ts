import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
import { DataserviceService } from '../dataservice.service';


@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.css']
})
export class ModalComponentComponent implements OnInit {
  
  title : string;
  data : any;
  type : any;
  constructor(
    public bsModalRef: BsModalRef,
    private dataserviceService : DataserviceService
    ) { }

  ngOnInit() {
    this.getSelectedType();
  }

  closeModal(){
    this.bsModalRef.hide();
  }

  getSelectedType():void{    
    this.data = this.dataserviceService.getData();         
    this.type = this.data.type;        
  }

}
