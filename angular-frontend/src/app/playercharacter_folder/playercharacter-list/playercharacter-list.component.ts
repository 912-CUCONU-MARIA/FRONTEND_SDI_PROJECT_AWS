import { Component, OnInit  } from '@angular/core';
import { Playercharacter } from '../playercharacter';
import { PlayercharacterService } from '../playercharacter.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-playercharacter-list',
  templateUrl: './playercharacter-list.component.html',
  styleUrls: ['./playercharacter-list.component.css']
})
export class PlayercharacterListComponent implements OnInit{

  playercharacters!:Playercharacter[];

    //for pagination
    totalPages: number[] = [];
    totalElements: number = 0;
    currentPage: number = 0;
    pageSize: number = 10;

    constructor(private playercharacterService:PlayercharacterService
      ,private router: Router){}

    ngOnInit(): void {
      this.getPlayercharacters();
      }
    
    private getPlayercharacters() {
      this.playercharacterService
        .getPlayercharactersList(this.currentPage, this.pageSize)
        .subscribe((data) => {
          this.playercharacters = data.content;
          this.totalElements = data.totalElements;
          this.totalPages = Array.from({ length: data.totalPages }, (_, i) => i);
        });
    }

    setPage(page: number) {
      this.currentPage = page;
      this.getPlayercharacters();
    }

    get pageRange() {
      const left = Math.max(0, this.currentPage - 2);
      const right = Math.min(this.totalPages.length - 1, this.currentPage + 2);
      const withDots = [...Array(this.totalPages.length).keys()].filter(i => i === 0 || i === this.totalPages.length - 1 || (i >= left && i <= right));
      return withDots;
    }

    updatePlayercharacter(id: number){
      this.router.navigate(['update-playercharacter',id]);
    }
  
    deletePlayercharacter(id:number){
      this.playercharacterService.deletePlayercharacter(id).subscribe(data=>{
        console.log(data);
        this.getPlayercharacters();
      })
    }
  
    confirmDelete(id: number) {
      if (confirm("Are you sure you want to delete this playercharacter?")) {
        this.deletePlayercharacter(id);
      }
    }
  
    playercharacterDetails(id:number){
      this.router.navigate(['playercharacter-details',id]);
    }


}
