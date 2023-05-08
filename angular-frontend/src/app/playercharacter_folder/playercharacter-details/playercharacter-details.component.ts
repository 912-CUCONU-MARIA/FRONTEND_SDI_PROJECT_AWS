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
    });
  }

  setPage(page: number): void {
    this.currentPage = page;
    this.getPlayerCharacterItems();
  }

  get pageRange() {
    const left = Math.max(0, this.currentPage - 2);
    const right = Math.min(this.totalPages.length - 1, this.currentPage + 2);
    const withDots = [...Array(this.totalPages.length).keys()].filter(i => i === 0 || i === this.totalPages.length - 1 || (i >= left && i <= right));
    return withDots;
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
