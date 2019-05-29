import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef} from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.css']
})
export class ModalComponentComponent implements OnInit {
  
  title : string;
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  closeModal(){
    this.bsModalRef.hide();
  }
}
