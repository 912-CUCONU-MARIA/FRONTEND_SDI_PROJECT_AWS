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
        });
    }

    setPage(page: number) {
      this.currentPage = page;
      this.getItems();
    }

    get pageRange() {
      const left = Math.max(0, this.currentPage - 2);
      const right = Math.min(this.totalPages.length - 1, this.currentPage + 2);
      const withDots = [...Array(this.totalPages.length).keys()].filter(i => i === 0 || i === this.totalPages.length - 1 || (i >= left && i <= right));
      return withDots;
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
