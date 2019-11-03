import { Component, OnInit } from '@angular/core';
//import de auth.service
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //Bind le formulaire register.component.html comme un tableau d'objet vide
  registerUserData = {}
  constructor(
    //init du auth service de import
    private _auth: AuthService
  ) { }

  ngOnInit() {
  }

  registerUser(){
    this._auth.registerUser(this.registerUserData).subscribe(
      res => console.log(res),
      err =>console.log(err)
    )
    res => res.send(this.registerUserData);
    console.log(this.registerUserData)
  }

}
