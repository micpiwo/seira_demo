import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GamesComponent} from "./games/games.component";
import {GameDetailsComponent} from "./game-details/game-details.component";
import {AddGamesComponent} from "./add-games/add-games.component";
import {EditGamesComponent} from "./edit-games/edit-games.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";



const routes: Routes = [
  {path:'', redirectTo:'/jeux', pathMatch:'full'},
  {
    path:'jeux',
    component: GamesComponent
  },
  {
    path:'jeux/:id',
    component: GameDetailsComponent
  },
  {
    path:'ajouter',
    component: AddGamesComponent
  },
  {
    path:'editer/:id',
    component: EditGamesComponent
  },
  //USERS
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
