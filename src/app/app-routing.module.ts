import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { PeopleComponent } from './people/people.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistTrackListComponent } from './artist-track-list/artist-track-list.component';
import { ArtistAlbumListComponent } from './artist-album-list/artist-album-list.component'


const routes: Routes = [
  { path:'dashboard', component:DashboardComponent },
  { path:'tvshows', component:TvshowsComponent },
  { path:'people', component:PeopleComponent },
  { 
    path:'artist', 
    component:ArtistComponent,
    children: [      
      {path: '', redirectTo: 'tracks', pathMatch: 'full'},
      {path: 'tracks', component: ArtistTrackListComponent},
      {path: 'albums', component: ArtistAlbumListComponent}
    ]
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
