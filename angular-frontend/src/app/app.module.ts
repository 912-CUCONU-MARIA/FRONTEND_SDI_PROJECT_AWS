import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameuserListComponent } from './gameuser_folder/gameuser-list/gameuser-list.component';
import { CreateGameuserComponent } from './gameuser_folder/create-gameuser/create-gameuser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GameuserAverageplayercharacterlevelComponent } from './gameuser_folder/gameuser-averageplayercharacterlevel/gameuser-averageplayercharacterlevel.component';
import { UpdateGameuserComponent } from './gameuser_folder/update-gameuser/update-gameuser.component';
import { GameuserDetailsComponent } from './gameuser_folder/gameuser-details/gameuser-details.component';
import { ItemListComponent } from './item_folder/item-list/item-list.component';
import { CreateItemComponent } from './item_folder/create-item/create-item.component';
import { ItemDetailsComponent } from './item_folder/item-details/item-details.component';
import { UpdateItemComponent } from './item_folder/update-item/update-item.component';
import { PlayercharacterListComponent } from './playercharacter_folder/playercharacter-list/playercharacter-list.component';
import { CreatePlayercharacterComponent } from './playercharacter_folder/create-playercharacter/create-playercharacter.component';
import { PlayercharacterDetailsComponent } from './playercharacter_folder/playercharacter-details/playercharacter-details.component';
import { UpdatePlayercharacterComponent } from './playercharacter_folder/update-playercharacter/update-playercharacter.component';
import { AddItemToPlayercharacterComponent } from './playercharacter-item_folder/add-item-to-playercharacter/add-item-to-playercharacter.component';
import { UpdateItemOfPlayercharacterComponent } from './playercharacter-item_folder/update-item-of-playercharacter/update-item-of-playercharacter.component';
import { ItemStatisticplayercharacterComponent } from './item_folder/item-statisticplayercharacter/item-statisticplayercharacter.component';

@NgModule({
  declarations: [
    AppComponent,
    GameuserListComponent,
    CreateGameuserComponent,
    GameuserAverageplayercharacterlevelComponent,
    UpdateGameuserComponent,
    GameuserDetailsComponent,
    ItemListComponent,
    CreateItemComponent,
    ItemDetailsComponent,
    UpdateItemComponent,
    PlayercharacterListComponent,
    CreatePlayercharacterComponent,
    PlayercharacterDetailsComponent,
    UpdatePlayercharacterComponent,
    AddItemToPlayercharacterComponent,
    UpdateItemOfPlayercharacterComponent,
    ItemStatisticplayercharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
