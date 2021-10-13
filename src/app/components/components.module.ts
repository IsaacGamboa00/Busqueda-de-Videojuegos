import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GameItemComponent } from './game-item/game-item.component';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    NavBarComponent,
    GameItemComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  exports:[
    NavBarComponent,
    GameItemComponent
  ],
  providers: [],
})
export class ComponentsModule{ }