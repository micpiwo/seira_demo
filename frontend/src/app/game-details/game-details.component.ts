import { Component, OnInit } from '@angular/core';
import {GamesService} from "../games.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  gameId:string;
  allGames:any = [];
  private _id: string;

  constructor(
    private routes: ActivatedRoute,
    private gamesService: GamesService
  ) { }

  ngOnInit() {
    //appel de id
    this.gameId = this.routes.snapshot.paramMap.get('id');
    this._id = this.routes.snapshot.paramMap.get('id');
    this.getGameDetail();
  }

  set games(myGames: any){
    this.allGames = myGames;
  }

  get games(){
    return this.allGames;
  }

  getGameDetail(): void{
    this.gamesService.getGameById(this.gameId)
      .subscribe((gameDetail) =>{
        this.games = gameDetail;
        console.log(gameDetail);
        res => res.send(gameDetail);
      });
  }

  deleteGameById(id): void{
    this._id = id;
    this.gamesService.deleteGamesService(this._id)
      .subscribe((GameId) =>{
        this.games = GameId;
        console.log(GameId);
      });
  }

}
