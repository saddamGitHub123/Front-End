import { BrowserModule } from '@angular/platform-browser';
import{HttpModule} from'@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

//import{NgxPaginationModule}from'ngx-pagination';//importing ng2-pagination for Paginatiton

import{AppComponent,}from'./app.component';
import{LoginComponent}from'./Login/login.component';


import{CommonModule}from'@angular/common';
import{AppRoutingModule} from'./app.route';


@NgModule({
  imports:      [ BrowserModule,
                   HttpModule,
                  FormsModule,
                  AppRoutingModule 
                ],
  declarations: [ AppComponent,LoginComponent],

  //providers:[UserService, AuthGuard],  
  
  bootstrap:    [ AppComponent ]
})
export class AppModule { 


}
