import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef} from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.css']
})
export class ModalComponentComponent implements OnInit {

  bsModalRef : BsModalRef;
  title : string;
  constructor() { }

  ngOnInit() {
  }

}
