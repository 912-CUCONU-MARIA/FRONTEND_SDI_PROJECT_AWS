import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit{

    items!:Item[];

    //for pagination
    totalPages: number[] = [];
    totalElements: number = 0;
    currentPage: number = 0;
    pageSize: number = 10;

    // New property for loading state
    isLoading: boolean = true;

    constructor(private itemService:ItemService
      ,private router: Router){}

    ngOnInit(): void {
      this.getItems();
      }
    
    private getItems() {
      this.itemService
        .getItemsList(this.currentPage, this.pageSize)
        .subscribe((data) => {
          this.items = data.content;
          this.totalElements = data.totalElements;
          this.totalPages = Array.from({ length: data.totalPages }, (_, i) => i);
          this.isLoading = false; // Set the loading state to false
        });
    }

    setPage(page: number) {
      this.currentPage = page - 1; // Subtract 1 here
      this.getItems();
    }
    
  
    get pageRange() {
      
      if (this.isLoading) return [];
      let result: number[] = [];
  
      if(this.totalPages.length==0)
        return [];

      if(this.totalPages.length<10)
        {
          for (let i = 1; i <= this.totalPages.length; i++)
            result.push(i);
          return result;
        }

      // Always add the first 5 pages and the last 5 pages
      for (let i = 1; i <= 5; i++) {
          result.push(i);
      }
      for (let i = 0; i < 5; i++) {
          result.push(this.totalPages.length - i);
      }
  
      //first page so we dont display number 0
      if(this.currentPage==0)
        result.push(this.currentPage+6);
  
      //add all pages up to them and 5 after
      else if (this.currentPage < 10) {
        //console.log("We re in first pages")
          for (let i = 1; i <= this.currentPage+6; i++) {
            if (!result.includes(i)) result.push(i);
          }
      }
      // Handling middle pages
      else if (this.currentPage >= 10 && this.currentPage <= this.totalPages.length - 13) {
        //console.log("We re in middle")
          for (let i = this.currentPage - 4; i <= this.currentPage + 6; i++) {
              if (!result.includes(i)) result.push(i);
          }
      }
      // Handling last 13 pages
      else if (this.currentPage >= this.totalPages.length - 12) {
        //console.log("We re in last pages")
          for (let i = this.currentPage - 4; i <= this.totalPages.length; i++) {
              if (!result.includes(i)) result.push(i);
          }
      }
  
      // Sort the array and return it
      result.sort((a, b) => a - b);
      return result;
  }

      shouldDisplayDots(index: number): boolean {
        const gapWithNextPage = this.pageRange[index + 1] - this.pageRange[index];
        const gapWithPreviousPage = index > 0 ? this.pageRange[index] - this.pageRange[index - 1] : 1;
        return gapWithNextPage > 1 && gapWithPreviousPage === 1;
      }

    updateItem(id: number){
      this.router.navigate(['update-item',id]);
    }
  
    deleteItem(id:number){
      this.itemService.deleteItem(id).subscribe(data=>{
        console.log(data);
        this.getItems();
      })
    }
  
    confirmDelete(id: number) {
      if (confirm("Are you sure you want to delete this item?")) {
        this.deleteItem(id);
      }
    }
  
    itemDetails(id:number){
      this.router.navigate(['item-details',id]);
    }


}
