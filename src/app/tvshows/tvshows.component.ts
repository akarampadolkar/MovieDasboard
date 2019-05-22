import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TvshowsComponent implements OnInit {

  constructor(private movieServiceService: MovieServiceService) { }

  ngOnInit() {
    this.getTvShowList();
  }

  imageBaseURl = 'https://image.tmdb.org/t/p/w500/';
  tvshowlist : any;

  
  getTvShowList():void{
    this.movieServiceService.getTvShowList()
    .subscribe((res) => this.tvshowlist = res.results);
  }


}
