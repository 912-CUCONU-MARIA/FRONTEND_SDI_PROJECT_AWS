import { Component, OnInit } from '@angular/core';
import { Gameuseraverageplayercharacterleveldto } from '../gameuseraverageplayercharacterleveldto'; 
import { GameuserService } from '../gameuser.service';

@Component({
  selector: 'app-gameuser-averageplayercharacterlevel',
  templateUrl: './gameuser-averageplayercharacterlevel.component.html',
  styleUrls: ['./gameuser-averageplayercharacterlevel.component.css']
})
export class GameuserAverageplayercharacterlevelComponent implements OnInit{
  gameuseraverageplayercharacterleveldtos?: Gameuseraverageplayercharacterleveldto[]; 

  constructor(private gameuserService:GameuserService){}

  ngOnInit(): void {
    this.getGameuseraverageplayercharacterleveldtos();
  }

  private getGameuseraverageplayercharacterleveldtos(){
    this.gameuserService.getGameUsersOrderedByAverageLevelOfPlayerCharacters().subscribe(data=>
      {
        this.gameuseraverageplayercharacterleveldtos=data;
      }
      );
  }
}
