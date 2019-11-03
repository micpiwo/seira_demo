import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class GamesService {

  //adresse du back
  private gamesUrlBack = "http://localhost:3000/games";
  private addGamesUrlBack = "http://localhost:3000/games/add";
  private deleteGamesUrlBack = "http://localhost:3000/games/delete";
  private updateGamesUrlBack = "http://localhost:3000/games/edit";

  constructor(
    private http: HttpClient
  ) { }

  //Methode get à appeler depuis homecomponent.ts
  getVideoGamesList(videogames){
    //appel httpclient + url du back + params object
    return this.http.get<any>(this.gamesUrlBack, videogames)
  }

  //Jeux appeler par id
  getGameById(id: string){
    const urlId = `${this.gamesUrlBack}/${id}`;
    return this.http.get<string>(urlId);
  }

  //Ajouter un jeux
  addGamesServices(addvideogames){
    const addGamesUrl = `${this.addGamesUrlBack}`;
    return this.http.post<any>(addGamesUrl, addvideogames);
  }

  //Suprimer un jeu
  deleteGamesService(id:string){
    const urlId = `${this.deleteGamesUrlBack}/${id}`;
    return this.http.get<string>(urlId);
  }

  //Mise a jour
  updateGamesService(id: string, updateVideoGames){
    const urlId = `${this.updateGamesUrlBack}/${id}`;
    return this.http.post<any>(urlId, updateVideoGames);
  }

}
