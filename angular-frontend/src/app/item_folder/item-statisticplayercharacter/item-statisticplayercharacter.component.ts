import { Component, OnInit } from '@angular/core';
import { ItemStatisticPlayerCharacterDto } from '../ItemStatisticPlayerCharacterDto';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-averageplayercharacterlevel',
  templateUrl: './item-averageplayercharacterlevel.component.html',
  styleUrls: ['./item-averageplayercharacterlevel.component.css']
})
export class ItemStatisticplayercharacterComponent implements OnInit{
  itemstatisticplayercharacter?: ItemStatisticPlayerCharacterDto[]; 

//for pagination
totalPages: number[] = [];
totalElements: number = 0;
currentPage: number = 0;
pageSize: number = 10;

constructor(private itemService:ItemService){}

ngOnInit(): void {
  this.getItemsOrderedByNumberOfCopies();
}

private getItemsOrderedByNumberOfCopies(){
  this.itemService.getItemsOrderedByNumberOfCopies(this.currentPage,this.pageSize).subscribe(data=>
    {
      this.itemstatisticplayercharacter=data.content;
      this.totalElements=data.totalElements;
      this.totalPages = Array.from({ length: data.totalPages }, (_, i) => i);
    });
}

setPage(page: number) {
  this.currentPage = page;
  this.getItemsOrderedByNumberOfCopies();
}

get pageRange() {
  const left = Math.max(0, this.currentPage - 2);
  const right = Math.min(this.totalPages.length - 1, this.currentPage + 2);
  const withDots = [...Array(this.totalPages.length).keys()].filter(i => i === 0 || i === this.totalPages.length - 1 || (i >= left && i <= right));
  return withDots;
}


}
