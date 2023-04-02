import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameuserListComponent } from './gameuser-list/gameuser-list.component';
import { CreateGameuserComponent } from './create-gameuser/create-gameuser.component';
import { FormsModule } from '@angular/forms';
import { GameuserAverageplayercharacterlevelComponent } from './gameuser-averageplayercharacterlevel/gameuser-averageplayercharacterlevel.component';

@NgModule({
  declarations: [
    AppComponent,
    GameuserListComponent,
    CreateGameuserComponent,
    GameuserAverageplayercharacterlevelComponent
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
