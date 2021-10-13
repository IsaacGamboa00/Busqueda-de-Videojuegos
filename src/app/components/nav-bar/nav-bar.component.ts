import { Component,EventEmitter, HostListener, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public pathImg: string
  public userName: string
  public navFixed: boolean

  public gameName:string=''

  @Output() searchGame = new EventEmitter<string>();

  constructor() {
    this.pathImg = "./../../../assets/logos/Logo.png"
    this.userName = "Eduardo"
    this.navFixed = false
    
  }

  ngOnInit(): void {
    
  }


  buscar(){
    console.log('se emitio')
    this.searchGame.emit(this.gameName)
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (window.scrollY > 100) {
      this.navFixed = true;
    } else {
      this.navFixed = false;
    }
  }

}
