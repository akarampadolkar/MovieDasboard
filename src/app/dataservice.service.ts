import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {


  private data = {};
  
  constructor() { }

    setData(selectedItem,type) {      
      this.data = {
        item : selectedItem,
        type : type
    }
  }

    getData(){
      return this.data;
    }
}
