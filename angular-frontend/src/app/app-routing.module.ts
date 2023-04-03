import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameuserListComponent } from './gameuser-list/gameuser-list.component';
import { CreateGameuserComponent } from './create-gameuser/create-gameuser.component';
import { GameuserAverageplayercharacterlevelComponent } from './gameuser-averageplayercharacterlevel/gameuser-averageplayercharacterlevel.component';
import { UpdateGameuserComponent } from './update-gameuser/update-gameuser.component';

const routes: Routes = [
  {path:'gameusers',component:GameuserListComponent}, //in app.component.html <a routerLink="gameusers" class="nav-link"> GameUser List</a>
  //{path:'',redirectTo:'gameusers',pathMatch:'full'},//empty /localhost:4200 gets us directly to this
  {path:'create-gameuser',component:CreateGameuserComponent},
  {path:'gameuser-average-playercharacter-level',component:GameuserAverageplayercharacterlevelComponent},
  {path:'update-gameuser/:id', component:UpdateGameuserComponent}
];
//maybe remove /:id from update-gameuser route
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
