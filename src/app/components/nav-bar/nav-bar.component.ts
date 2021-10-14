import { Component,EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


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
  @Input() inputHide:boolean

  @Output() searchGame = new EventEmitter<string>();

  constructor(private router:Router) {
    this.pathImg = "./../../../assets/logos/Logo.png"
    this.userName = "Eduardo"
    this.navFixed = false
    this.inputHide = false
    
  }

  ngOnInit(): void {
    
  }

  navigate(){
    this.router.navigate([''])
  }

  buscar(){
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
