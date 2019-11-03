import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  _MatMenuDirectivesModule,
  MatBadgeModule,
  MatButtonModule, MatCardModule, MatChipsModule, MatDatepickerModule, MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatRadioModule, MatSelectModule,
  MatSidenavModule, MatTableModule,
  MatToolbarModule, MatTooltipModule
} from "@angular/material";
import {MatGridListModule} from "@angular/material";
import { MenuComponent } from './menu/menu.component';
import { GamesComponent } from './games/games.component';
import {GamesService} from "./games.service";
import { GameDetailsComponent } from './game-details/game-details.component';

import {FormsModule} from "@angular/forms";
import { AddGamesComponent } from './add-games/add-games.component';
import { EditGamesComponent } from './edit-games/edit-games.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AuthService} from "./auth.service";



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GamesComponent,
    GameDetailsComponent,
    AddGamesComponent,
    EditGamesComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    MatCardModule,
    FormsModule

  ],
  providers: [GamesService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule { }
