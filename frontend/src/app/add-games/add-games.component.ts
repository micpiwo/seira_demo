import { Component, OnInit } from '@angular/core';
import {GamesService} from "../games.service";

@Component({
  selector: 'app-add-games',
  templateUrl: './add-games.component.html',
  styleUrls: ['./add-games.component.css']
})
export class AddGamesComponent implements OnInit {

  addGamesDatas = {};


  constructor(
    private gamesServices: GamesService,
  ) { }

  ngOnInit() {

  }

  addGames(){
    this.gamesServices.addGamesServices(this.addGamesDatas)
      .subscribe(
        res => console.log(res),
        err => console.log(err),
      );
      res => res.save(this.addGamesDatas);
      res => res.send(this.addGamesDatas);
      console.log(this.addGamesDatas)
  }


}
