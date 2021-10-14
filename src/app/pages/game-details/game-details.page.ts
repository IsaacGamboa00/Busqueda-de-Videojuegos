import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../../services/game/game.service';
import { GameDetail } from '../../model/gameDetail/gameDetail';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.page.html',
  styleUrls: ['./game-details.page.scss']
})
export class GameDetailsPage implements OnInit {
  
  game:GameDetail
  urlLogoStore:string='https://www.cheapshark.com/img/stores/icons/'

  constructor(
    private route: ActivatedRoute,
    private gameService:GameService
    ) {

      this.game={
        info:{
          title:"",
          steamAppID:0,
          thumb:""
        },
        cheapestPriceEver:{
          price:"",
          date:0
        },
        deals:[]
      }
    }

  ngOnInit(): void {
    this.getGame()
  }

  getGame(): void {
    console.log(this.route)
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.gameService.getById(id).subscribe(
      res => {
        this.game=res
        console.log(this.game)
      },
      err => console.error(err)
    )
  }


  
}
