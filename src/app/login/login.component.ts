import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login : string = "";
  senha : string = "";

  constructor(private _api : ApiService) { }

  ngOnInit() {
  }

  logar()
  {
    console.log("login " + this.login);
    console.log("senha " + this.senha);
    
    
  }

}
