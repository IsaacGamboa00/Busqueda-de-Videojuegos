import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent implements OnInit {

  @Input() public id:number=0
  @Input() public name:string=""
  @Input() public img:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
