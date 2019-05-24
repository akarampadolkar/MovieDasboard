import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TvshowsComponent implements OnInit {

  imageBaseURl = 'https://image.tmdb.org/t/p/w500/';
  tvshowlist : any;

  constructor(private movieServiceService: MovieServiceService, private ngxLoader: NgxUiLoaderService) { }

  ngOnInit() {
    this.getTvShowList();
  }

  getTvShowList():void{
    this.ngxLoader.start();
    this.movieServiceService.getTvShowList()
    .subscribe((res) => {      
      this.tvshowlist = res.results;      
      this.ngxLoader.stop();
      },(error) => console.log(error));
  }


}
