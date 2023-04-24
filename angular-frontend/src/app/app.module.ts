import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameuserListComponent } from './gameuser-list/gameuser-list.component';
import { CreateGameuserComponent } from './gameuser_folder/create-gameuser/create-gameuser.component';
import { FormsModule } from '@angular/forms';
import { GameuserAverageplayercharacterlevelComponent } from './gameuser_folder/gameuser-averageplayercharacterlevel/gameuser-averageplayercharacterlevel.component';
import { UpdateGameuserComponent } from './update-gameuser/update-gameuser.component';
import { GameuserDetailsComponent } from './gameuser-details/gameuser-details.component';
import { ItemListComponent } from './item_folder/item-list/item-list.component';
import { CreateItemComponent } from './item_folder/create-item/create-item.component';

@NgModule({
  declarations: [
    AppComponent,
    GameuserListComponent,
    CreateGameuserComponent,
    GameuserAverageplayercharacterlevelComponent,
    UpdateGameuserComponent,
    GameuserDetailsComponent,
    ItemListComponent,
    CreateItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
