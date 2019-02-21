import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: LoginService) { }

  ngOnInit() {
  }

  LogearUsuario(event){
    event.preventDefault();
    localStorage.clear();
    const target = event.target;
    const usuario = target.querySelector("#usuario").value;
    const password = target.querySelector("#password").value;
    this.Auth.Login(usuario,password).subscribe(data=>{
      console.log(data, "Respuesta")           
      localStorage.setItem("Token", data["sessionTokenBck"]); 
      location.href = "/booking";        
    }, err => {
      console.log(err);
      alert("Usuario o contraseña invalidos.");
      
    });
    
    
    
  }

  
}
