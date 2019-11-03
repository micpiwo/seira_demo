import { Component, OnInit } from '@angular/core';
//appel du service
import {GamesService} from "../games.service";


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  //tableau de valeur vide
  gamesData:any = [];


  constructor(
    //init du service
    private gamesService: GamesService
  ) { }

  //Appel de la methode getAllGames
  ngOnInit() {
  this.getAllVideoGames();
  }


  getAllVideoGames(){
    //appel de la methode du service observable
    this.gamesService.getVideoGamesList(this.gamesData).
    subscribe((videoGamesList) =>
    {
      //le tableau de données à appeler *ngFor dans html
      this.gamesData = videoGamesList
    })
  }
}
