import { Component, OnInit } from '@angular/core';
import { Gameuser } from '../gameuser';
import { GameuserService } from '../gameuser.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-gameuser-list',
  templateUrl: './gameuser-list.component.html',
  styleUrls: ['./gameuser-list.component.css']
})
export class GameuserListComponent implements OnInit{

  gameusers!: Gameuser[]; 

  //for pagination
  totalPages: number[] = [];
  totalElements: number = 0;
  currentPage: number = 0;
  pageSize: number = 10;
  sortColumn: string | null = null;
  sortDirection: string | null = null;
  

  constructor(private gameuserService:GameuserService
    ,private router: Router){}

  ngOnInit(): void {
   this.getGameusers();
  }

  //for pagination2
  private getGameusers() {
    this.gameuserService
      .getGameusersList(this.currentPage, this.pageSize, this.sortColumn ?? undefined, this.sortDirection ?? undefined)
      .subscribe((data) => {
        this.gameusers = data.content;
        this.totalElements = data.totalElements;
        this.totalPages = Array.from({ length: data.totalPages }, (_, i) => i);
      });
  }
  
  

  setPage(page: number) {
    this.currentPage = page;
    this.getGameusers();
  }

  //new pagination below comments
  // get pageRange() {
  //   const left = Math.max(0, this.currentPage - 2);
  //   const right = Math.min(this.totalPages.length - 1, this.currentPage + 2);
  //   const withDots = [...Array(this.totalPages.length).keys()].filter(i => i === 0 || i === this.totalPages.length - 1 || (i >= left && i <= right));
  //   return withDots;
  // }
  get pageRange() {
    const fullRange = Array(this.totalPages.length).fill(0).map((_, i) => i);
    const firstFive = fullRange.slice(0, 5);
    const lastFive = fullRange.slice(-5);

    let middlePages: number[] = [];
    if (this.currentPage > 10) { // If current page is beyond 10
        const start = Math.max(this.currentPage - 5, firstFive.length);
        const end = Math.min(this.currentPage + 5, fullRange.length - lastFive.length);
        middlePages = fullRange.slice(start, end + 1);
    }
    // Remove duplicates and sort
    const result = Array.from(new Set([...firstFive, ...middlePages, ...lastFive])).sort((a, b) => a - b);
    return result;
}
    //new pagination func
    shouldDisplayPage(index: number): boolean {
      return this.pageRange[index - 1] === undefined || this.pageRange[index] - this.pageRange[index - 1] === 1;
    }
    
    shouldDisplayDots(index: number): boolean {
      return this.pageRange[index - 1] !== undefined && this.pageRange[index] - this.pageRange[index - 1] > 1;
    }
    
    //


   
  


  updateGameuser(id: number){
    this.router.navigate(['update-gameuser',id]);
  }

  deleteGameuser(id:number){
    this.gameuserService.deleteGameuser(id).subscribe(data=>{
      console.log(data);
      this.getGameusers();
    })
  }

  confirmDelete(id: number) {
    if (confirm("Are you sure you want to delete this game user?")) {
      this.deleteGameuser(id);
    }
  }

  gameuserDetails(id:number){
    this.router.navigate(['gameuser-details',id]);
  }

  // mySort(isAsc:boolean){
  //   if(isAsc){
  //     this.gameusers.sort((a,b)=>(a.firstName>b.firstName) ? 1: ((b.firstName>a.firstName) ? -1 : 0));
  //   } else{
  //     this.gameusers.sort((a,b)=>(a.firstName>b.firstName) ? -1: ((b.firstName>a.firstName) ? 1 : 0));
  //   }

  // }
  // mySort(isAsc: boolean) {
  //   const direction = isAsc ? 'asc' : 'desc';
  //   const sort = 'firstName';
  
  //   this.gameuserService.getGameusersList(this.currentPage, this.pageSize, sort, direction).subscribe(data => {
  //     this.gameusers = data.content;
  //     this.totalElements = data.totalElements;
  //     this.totalPages = Array.from({ length: Math.ceil(data.totalElements / this.pageSize) }, (_, i) => i);
  //   });
  // }
    mySort(isAsc: boolean) {
      const direction = isAsc ? 'asc' : 'desc';
      this.currentPage = 0;
      this.sortColumn = 'firstName';
      this.sortDirection = direction;
      this.getGameusers();
    }
  

}