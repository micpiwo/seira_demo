import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  //url du back ou sont stocker les datas user de mongodb atlas cloud test->users
  private _registerUrl = "http://localhost:3000/users/register"
//url du back login json
  private _loginUrl = "http://localhost:3000/users/login"

  constructor(
    private http: HttpClient,
  ) { }

  //Register methode appeleée dans register.ts
  registerUser(user){
    return this.http.post<any>(this._registerUrl, user);
  }

  //methode appelée dans login.ts observable
  loginUser(user){
    return this.http.post<any>(this._loginUrl, user)
  }
}
