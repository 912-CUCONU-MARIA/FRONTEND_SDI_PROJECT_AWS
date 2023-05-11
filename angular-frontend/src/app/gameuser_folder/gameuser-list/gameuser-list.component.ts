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
   this.currentPage=0;
   //this.getGameusers();
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
    this.currentPage = page; // subtract 1 because pages start from 0
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
    let result: number[] = [];
    const totalPageNum = this.totalPages.length;
  
    // Always add the first 5 pages if they exist
    for (let i = 0; i < Math.min(5, totalPageNum); i++) {
      result.push(i);
    }
  
    // Handling middle pages
    if (this.currentPage >= 11) {
      // Add 5 pages before the current page and 5 pages after
      for (let i = this.currentPage - 5; i <= this.currentPage + 5; i++) {
        if (i > 0 && i <= totalPageNum && !result.includes(i)) {
          result.push(i);
        }
      }
    } else if (this.currentPage < 11) {
      // Add pages from 1 to current page + 5
      for (let i = 1; i <= this.currentPage + 5; i++) {
        if (!result.includes(i)) {
          result.push(i);
        }
      }
    }
  
    // Handling last pages
    if (this.currentPage > totalPageNum - 12) {
      // Add 5 pages before the current page and all pages till the end
      for (let i = this.currentPage - 5; i <= totalPageNum; i++) {
        if (!result.includes(i)) {
          result.push(i);
        }
      }
    } else {
      // Always add the last 5 pages if they exist
      for (let i = totalPageNum - 4; i <= totalPageNum; i++) {
        if (!result.includes(i)) {
          result.push(i);
        }
      }
    }
  
    // Sort the array and return it
    result.sort((a, b) => a - b);
    return result;
  }
  
  
  
    //new pagination func
    shouldDisplayPage(index: number): boolean {
      return this.pageRange[index - 1] === undefined || this.pageRange[index] - this.pageRange[index - 1] === 1;
    }
    
    shouldDisplayDots(index: number): boolean {
      return this.pageRange[index] !== undefined && this.pageRange[index] - (this.pageRange[index - 1] || 0) > 1;
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
    mySort(isAsc: boolean) {
      const direction = isAsc ? 'asc' : 'desc';
      this.currentPage = 0;
      this.sortColumn = 'firstName';
      this.sortDirection = direction;
      this.getGameusers();
    }
  

}