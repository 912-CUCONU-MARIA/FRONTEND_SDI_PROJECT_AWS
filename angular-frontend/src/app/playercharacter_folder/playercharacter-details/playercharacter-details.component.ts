import { Component,OnInit,Input,OnChanges } from '@angular/core';
import { Playercharacterusername } from '../playercharacterusername';
import { ActivatedRoute } from '@angular/router';
import { PlayercharacterService } from '../playercharacter.service';
import { PlayercharacterItemService } from 'src/app/playercharacter-item_folder/playercharacter-item.service';
import { PlayerCharacterItemDto } from 'src/app/playercharacter-item_folder/player-character-item-dto';
import { PlayerCharacterItemNameDto } from 'src/app/playercharacter-item_folder/player-character-item-name-dto';


@Component({
  selector: 'app-playercharacter-details',
  templateUrl: './playercharacter-details.component.html',
  styleUrls: ['./playercharacter-details.component.css']
})
export class PlayercharacterDetailsComponent implements OnInit{

  id!:number
  playercharacter:Playercharacterusername=new Playercharacterusername();
  showAddItemModal: boolean = false;
  items: PlayerCharacterItemNameDto[] = [];
  showUpdateItemModal: boolean = false;
  currentItemToUpdate:PlayerCharacterItemNameDto= new PlayerCharacterItemNameDto();


  totalPages: number[] = [];
  totalElements: number = 0;
  currentPage: number = 0;
  pageSize: number = 10;

  // New property for loading state
  isLoading: boolean = true;

  constructor(private route: ActivatedRoute, private playercharacterService: PlayercharacterService, private playerCharacterItemService: PlayercharacterItemService) {
  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getPlayerCharacterDetails();
    this.getPlayerCharacterItems();
  }
  
  getPlayerCharacterDetails(): void {
    this.playercharacterService.getPlayercharacterById(this.id).subscribe(data => {
      this.playercharacter = data;
    });
  }

  getPlayerCharacterItems(): void {
    this.playerCharacterItemService.getPlayerCharacterItems(this.id, this.currentPage, this.pageSize).subscribe(data => {
      this.items = data.content;
      this.totalElements = data.totalElements;
      this.totalPages = Array.from({ length: data.totalPages }, (_, i) => i);
      this.isLoading = false; // Set the loading state to false
    });
  }

  setPage(page: number) {
    this.currentPage = page - 1; // Subtract 1 here
    this.getPlayerCharacterItems();
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

  addItemToPlayercharacter(): void {
    this.showAddItemModal = true;
  }

  closeAddItemModal(): void {
    this.showAddItemModal = false;
  }

  // addItemToPlayerCharacter(data: { itemId: number, playerCharacterItemDto: PlayerCharacterItemDto }): void {
  //   this.playerCharacterItemService.addItemToPlayerCharacter(this.id, data.itemId, data.playerCharacterItemDto);
  //   this.closeAddItemModal();
  // }

  // addItemToPlayerCharacter(event: { itemId: number; itemName: string; playerCharacterItemDto: PlayerCharacterItemDto }): void {
  //   this.playerCharacterItemService.addItemToPlayerCharacter(this.id, event.itemId, event.playerCharacterItemDto);
  //   this.playercharacter.numberOfItemsOwned = (this.playercharacter.numberOfItemsOwned || 0) + 1;
  //   //this.playercharacter.itemsOwned.push(event.itemName);
  //   this.closeAddItemModal();
  // }
  
  addItemToPlayerCharacter(event: { itemId: number; itemName: string; playerCharacterItemDto: PlayerCharacterItemDto }): void {
    this.playerCharacterItemService.addItemToPlayerCharacter(this.id, event.itemId, event.playerCharacterItemDto).subscribe(() => {
      this.playercharacter.numberOfItemsOwned = (this.playercharacter.numberOfItemsOwned || 0) + 1;
      const newItem = new PlayerCharacterItemNameDto();
      newItem.id = event.itemId;
      newItem.isEquipped = event.playerCharacterItemDto.isEquipped;
      newItem.upgradeTier = event.playerCharacterItemDto.upgradeTier;
      this.items.push(newItem);
      this.getPlayerCharacterItems(); // Refresh the paginated items list
      this.closeAddItemModal();
    });
  }
  
  //update 
  openUpdateItemModal(item: PlayerCharacterItemNameDto): void {
    this.currentItemToUpdate = item;
    this.showUpdateItemModal = true;
  }
  
  closeUpdateItemModal(): void {
    this.showUpdateItemModal = false;
  }
  
  updateItem(item: PlayerCharacterItemDto): void {
    if (this.currentItemToUpdate) {
      this.playerCharacterItemService.updatePlayerCharacterItem(this.id, this.currentItemToUpdate.id, item).subscribe(() => {
        this.currentItemToUpdate!.isEquipped = item.isEquipped;
        this.currentItemToUpdate!.upgradeTier = item.upgradeTier;
        this.closeUpdateItemModal();
      });
    }
  }
  

  deleteItem(id: number): void {
    this.playerCharacterItemService.deletePlayerCharacterItem(this.id, id).subscribe(() => {
      this.items = this.items.filter(item => item.id !== id);
      this.playercharacter.numberOfItemsOwned = (this.playercharacter.numberOfItemsOwned || 0) - 1;
      this.getPlayerCharacterItems(); // Refresh the paginated items list
    });
  }
  confirmDelete(id: number) {
    if (confirm("Are you sure you want to remove this item from this playercharacter?")) {
      this.deleteItem(id);
    }
  }

}
