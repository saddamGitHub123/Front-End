
      import { Injectable } from '@angular/core';
      import { Http, Response,Headers,RequestOptions } from '@angular/http';
      import { Observable } from 'rxjs';
      import 'rxjs/Rx';
      import{Router} from'@angular/router';
      
      @Injectable()
      export class LoginService{

        constructor(private http: Http,private router:Router){};
      
        postJson(username:string,user_password:string){
      
           let body = JSON.stringify({username:username,user_password:user_password});
           let headers = new Headers({ 'Content-Type': 'application/json' });
           let options = new RequestOptions({ headers: headers });
       
           console.log(body);
           console.log(options);
          
           return this.http.post('http://192.168.2.94:8080/onlinerestaurants/login/addUser', body, options)
           .map(this.extractData)
           .catch(this.handleError);
        }
      
       /* private extractData(res: Response) {
          let body = res.json();
          if (body && body.token) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(body));
          }


          if(body && body.Status_Code){
          localStorage.setItem('currentUser', JSON.stringify(body));
          }

          console.log(body);
          return body.data || { };
        }*/


       private extractData(res: Response) {
          let body = res.json();
          localStorage.setItem('loginkey',JSON.stringify(res.json()))
         // let currentUser = JSON.parse(localStorage.getItem('loginkey'));
          
          console.log(body);
          return body.data || { };
        }
      
      
        private handleError (error: any) {
          console.error(error);
          return Observable.throw(error.json().error || 'Server error');
        }
      
      
      }
      

    
      

