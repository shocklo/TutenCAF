import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  Login(usuario,password){
    let app = "APP_BCK";
    let email = usuario.replace('@', '%40');
    let params = {
      headers: new HttpHeaders({        
        'Content-Type': 'application/json',
        'password': password,
        'app': app
      })
    }
    console.log(params);
      return this.http.put('https://dev.tuten.cl:443/TutenREST/rest/user/'+email, null, params)
    
  }

  TraerBooking(){
    let token = localStorage.getItem("Token");   
    if(token==null){
      location.href = "/login";      
    }else{
      console.log(token);
      let adminemail = "testapis@tuten.cl"      
      let email = "contacto%40tuten.cl"     
      let app = "APP_BCK"       
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json');    
      headers = headers.set('app', app);    
      headers = headers.set('adminemail', adminemail);   
      headers = headers.set('token', token);       
      let params2 = {
        headers
      }
      console.log(params2);
        return this.http.get('https://dev.tuten.cl:443/TutenREST/rest/user/contacto%40tuten.cl/bookings?current=true', params2)
    }
   
    
  }
}
