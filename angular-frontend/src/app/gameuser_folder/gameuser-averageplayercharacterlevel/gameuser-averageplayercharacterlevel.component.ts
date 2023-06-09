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


    //for pagination
    totalPages: number[] = [];
    totalElements: number = 0;
    currentPage: number = 0;
    pageSize: number = 10;

    constructor(private gameuserService:GameuserService){}

    ngOnInit(): void {
      this.getGameuseraverageplayercharacterleveldtos();
    }

    private getGameuseraverageplayercharacterleveldtos(){
      this.gameuserService.getGameUsersOrderedByAverageLevelOfPlayerCharacters(this.currentPage,this.pageSize).subscribe(data=>
        {
          this.gameuseraverageplayercharacterleveldtos=data.content;
          this.totalElements=data.totalElements;
          this.totalPages = Array.from({ length: data.totalPages }, (_, i) => i);
        });
    }

    setPage(page: number) {
      this.currentPage = page;
      this.getGameuseraverageplayercharacterleveldtos();
    }

    get pageRange() {
      const left = Math.max(0, this.currentPage - 2);
      const right = Math.min(this.totalPages.length - 1, this.currentPage + 2);
      const withDots = [...Array(this.totalPages.length).keys()].filter(i => i === 0 || i === this.totalPages.length - 1 || (i >= left && i <= right));
      return withDots;
    }

  }
