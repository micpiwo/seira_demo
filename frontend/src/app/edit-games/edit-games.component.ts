import { Component, OnInit } from '@angular/core';
import {GamesService} from "../games.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-games',
  templateUrl: './edit-games.component.html',
  styleUrls: ['./edit-games.component.css']
})
export class EditGamesComponent implements OnInit {

  updateGameDatas = {}
  gamesData:any = [];
  gameId:string;


  constructor(
    private routes: ActivatedRoute,
    private gamesServices: GamesService,
  ) { }

  ngOnInit() {
    this.gameId = this.routes.snapshot.paramMap.get('id');
    this.getGameDetail()
  }

  set games(myGames: any){
    this.gamesData = myGames;
  }

  get games(){
    return this.gamesData;
  }

  getGameDetail(): void{
    this.gamesServices.getGameById(this.gameId)
      .subscribe((gameDetail) =>{
        this.games = gameDetail;
        console.log(gameDetail);
        res => res.send(gameDetail);
      });
  }

  updateGames(gameData: any){
    this.gamesServices.getGameById(this.gameId)
      .subscribe((gameDetail) =>{
        this.games = gameDetail;

        if(gameDetail){
          gameData = this.updateGameDatas;
          this.gamesServices.updateGamesService(this.gameId, gameData).subscribe((UpdateData) => {
            this.gameId = UpdateData;
            this.updateGameDatas = UpdateData;

          });
          res => res.save(gameData);
          console.log(this.gameId, this.updateGameDatas);

        }else{
          console.log('Id inconnu');
        }

      });
  }

}
