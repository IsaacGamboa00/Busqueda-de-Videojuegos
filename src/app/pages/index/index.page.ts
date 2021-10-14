import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game/game.service';
import { Game } from '../../model/game/game';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss']
})
export class IndexPage implements OnInit {

  public urlImgS:string="./../../../assets/icons/search.png"
  public hidden:boolean=true;
  public gameName:string
  public games:Game[]

  constructor(private gameService:GameService) { 

    this.gameName=""
    this.games=[]

  }

  ngOnInit(): void {
    this.getGames()
  }

  search(name:string){
    
    if(name ==""){
      window.alert("Upss creo que no has buscado nada :)");
    }else{
      this.hidden=false
      this.gameName=name
      this.getGames()
    } 

  }

  getGames(){
    this.gameService.getAllByGameName(this.gameName).subscribe(
      res => {
        this.games=res
        console.log(this.games)
      },
      err => console.error(err)
    )
  }


}
