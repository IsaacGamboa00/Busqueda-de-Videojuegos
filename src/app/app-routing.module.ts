import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPage } from './pages/index/index.page';
import { GameDetailsPage } from './pages/game-details/game-details.page';

const routes: Routes = [

  {path: '', component: IndexPage},
  {path: 'gameDetail/:id', component: GameDetailsPage}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
