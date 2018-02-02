import { Routes, RouterModule } from '@angular/router';

import{AppComponent} from'./app.component';
import{LoginComponent}from'./Login/login.component';


/*const APP_ROUTES = [
//{ path: '', redirectTo: '/login', pathMatch: 'full' },

  {path: '', component:LoginComponent},
 // {path:'home', component:HomeComponent},
  { path: 'home',canActivate: [AuthGuard], component:HomeComponent},
  
  {path:'products', component:ProductComponent},
  { path:'users', component:UserComponent}, 
  { path:'Addproduct', component:AddProductComponent}, 
  { path:'Adduser', component: AddUserComponent}, 
  //{ path:'orders', component: OrderComponent,outlet:"popup"} 
  { path:'orders', component: OrderComponent} 

];*/





const APP_ROUTES = [
  {
          path: '',
          redirectTo: '/login',
          pathMatch: 'full'
  },
  {
          path: 'login',
          component: LoginComponent        
  }
  
 
  ];






export const AppRoutingModule = RouterModule.forRoot(APP_ROUTES);







