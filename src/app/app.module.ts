import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexPage } from './pages/index/index.page';
import { ComponentsModule } from './components/components.module';
import { GameService } from './services/game/game.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GameDetailsPage } from './pages/game-details/game-details.page';


@NgModule({
  declarations: [
    AppComponent,
    IndexPage,
    GameDetailsPage
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
