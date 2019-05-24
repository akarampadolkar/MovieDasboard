import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule }    from '@angular/common/http';
import { MovieFilterPipe } from './movie-filter.pipe';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { PeopleComponent } from './people/people.component';
import { NgxUiLoaderModule } from  'ngx-ui-loader';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MovieFilterPipe,
    MovieDetailComponent,
    TvshowsComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    NgxUiLoaderModule,    
    TypeaheadModule.forRoot(), ModalModule.forRoot(), PaginationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
