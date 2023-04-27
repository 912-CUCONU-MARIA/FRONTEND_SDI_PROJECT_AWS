import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameuserListComponent } from './gameuser_folder/gameuser-list/gameuser-list.component';
import { CreateGameuserComponent } from './gameuser_folder/create-gameuser/create-gameuser.component';
import { GameuserAverageplayercharacterlevelComponent } from './gameuser_folder/gameuser-averageplayercharacterlevel/gameuser-averageplayercharacterlevel.component';
import { UpdateGameuserComponent } from './gameuser_folder/update-gameuser/update-gameuser.component';
import { GameuserDetailsComponent } from './gameuser_folder/gameuser-details/gameuser-details.component';
import { ItemListComponent } from './item_folder/item-list/item-list.component';
import { CreateItemComponent } from './item_folder/create-item/create-item.component';
import { UpdateItemComponent } from './item_folder/update-item/update-item.component';
import { ItemDetailsComponent } from './item_folder/item-details/item-details.component';

const routes: Routes = [
  {path:'gameusers',component:GameuserListComponent}, //in app.component.html <a routerLink="gameusers" class="nav-link"> GameUser List</a>
  //{path:'',redirectTo:'gameusers',pathMatch:'full'},//empty /localhost:4200 gets us directly to this
  {path:'create-gameuser',component:CreateGameuserComponent},
  {path:'gameuser-average-playercharacter-level',component:GameuserAverageplayercharacterlevelComponent},
  {path:'update-gameuser/:id', component:UpdateGameuserComponent},
  {path:'gameuser-details/:id',component:GameuserDetailsComponent},

  {path:'items',component:ItemListComponent},
  {path:'create-item',component:CreateItemComponent},
  {path:'update-item/:id', component:UpdateItemComponent},
  {path:'item-details/:id',component:ItemDetailsComponent}

];
//maybe remove /:id from update-gameuser route
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
