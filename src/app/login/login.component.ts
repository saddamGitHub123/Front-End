import { Component } from '@angular/core';
import {LoginService } from '../Login/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'my-login',
  //templateUrl: './app.component.html',
  templateUrl: './login.component.html',
  //styleUrls: ['./app.component.css']
  providers:[LoginService]
})
export class LoginComponent {
  
  getLoginRes:string;
  username:string;
  user_password:string;
  imageValue:string;

   constructor(private router:Router,private loginService:LoginService){}

  login(){
  
    let uname=this.username;
    console.log(uname);
    let upassword=this.user_password
    console.log(upassword);

    console.log("inside login method");
          this.loginService.postJson(uname, upassword)
                   .subscribe(
                      data => {
                          this. getLoginRes=data;
    
                          if(this.username=='saddam' &&this.user_password=='saddam' ){
                         // this.user. setUserLoggedIn();
                           //this.router.navigate(['home']);
                          }
    
                 
    
                      },
                      error => alert(error),
                      () => console.log(this.getLoginRes)
                    );
    
                  // this.loginLocalData =JSON.parse(localStorage.getItem("loginkey"));
                  // console.log(this.loginLocalData);
                   
                    
      }

      image(){
  
        let uname=this.username;
        let upassword=this.user_password
        let path = this.imageValue;
    
        console.log("inside login method");
              this.loginService.postJson(uname, upassword)
                       .subscribe(
                          data => {
                              this. getLoginRes=data;
        
                              if(this.username=='saddam' &&this.user_password=='saddam' ){
                             // this.user. setUserLoggedIn();
                               //this.router.navigate(['home']);
                              }
        
                     
        
                          },
                          error => alert(error),
                          () => console.log(this.getLoginRes)
                        );
        
                      // this.loginLocalData =JSON.parse(localStorage.getItem("loginkey"));
                      // console.log(this.loginLocalData);
                       
                        
          }
}
