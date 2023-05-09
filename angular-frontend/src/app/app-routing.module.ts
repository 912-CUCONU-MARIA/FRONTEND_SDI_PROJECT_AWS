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
import { PlayercharacterListComponent } from './playercharacter_folder/playercharacter-list/playercharacter-list.component';
import { CreatePlayercharacterComponent } from './playercharacter_folder/create-playercharacter/create-playercharacter.component';
import { UpdatePlayercharacterComponent } from './playercharacter_folder/update-playercharacter/update-playercharacter.component';
import { PlayercharacterDetailsComponent } from './playercharacter_folder/playercharacter-details/playercharacter-details.component';
import { ItemStatisticplayercharacterComponent } from './item_folder/item-statisticplayercharacter/item-statisticplayercharacter.component';

const routes: Routes = [
  {path:'gameusers',component:GameuserListComponent}, //in app.component.html <a routerLink="gameusers" class="nav-link"> GameUser List</a>
  //{path:'',redirectTo:'gameusers',pathMatch:'full'},//empty /localhost:4200 gets us directly to this
  {path:'create-gameuser',component:CreateGameuserComponent},
  {path:'gameuser-average-playercharacter-level',component:GameuserAverageplayercharacterlevelComponent},
  {path:'update-gameuser/:id', component:UpdateGameuserComponent},
  {path:'gameuser-details/:id',component:GameuserDetailsComponent},

  {path:'items',component:ItemListComponent},
  {path:'create-item',component:CreateItemComponent},
  {path:'item-statistic-playercharacter',component:ItemStatisticplayercharacterComponent},
  {path:'update-item/:id', component:UpdateItemComponent},
  {path:'item-details/:id',component:ItemDetailsComponent},

  {path:'playercharacters',component:PlayercharacterListComponent},
  {path:'create-playercharacter',component:CreatePlayercharacterComponent},
  {path:'update-playercharacter/:id', component:UpdatePlayercharacterComponent},
  {path:'playercharacter-details/:id',component:PlayercharacterDetailsComponent}

];
//maybe remove /:id from update-gameuser route
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
