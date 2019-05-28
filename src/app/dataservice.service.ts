import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {


  private data = {};
  
  constructor() { }

    setData(selectedMovie) {  
      this.data = selectedMovie;      
    }

    getData(){
      return this.data;
    }
}
