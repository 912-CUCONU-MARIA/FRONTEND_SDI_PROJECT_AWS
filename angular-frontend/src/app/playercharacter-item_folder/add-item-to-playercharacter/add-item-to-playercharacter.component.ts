import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/item_folder/item';
import { ItemService } from 'src/app/item_folder/item.service';
import { Itemnameeffectdto } from 'src/app/item_folder/itemnameeffectdto';
import { PlayerCharacterItemDto } from '../player-character-item-dto';
import { debounceTime } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';


@Component({
  selector: 'app-add-item-to-playercharacter',
  templateUrl: './add-item-to-playercharacter.component.html',
  styleUrls: ['./add-item-to-playercharacter.component.css']
})
export class AddItemToPlayercharacterComponent implements OnInit,OnDestroy{
  @Output() close = new EventEmitter<void>();
  @Output() submitData = new EventEmitter<{ itemId: number; itemName: string; playerCharacterItemDto: PlayerCharacterItemDto }>();

  searchQuery: string = '';
  searchResults: Itemnameeffectdto[] = [];
  selectedItem: Itemnameeffectdto | null = null;
  isEquipped: boolean = false;
  upgradeTier: number = 0;

  searchQuerySubject: Subject<string> = new Subject<string>();
  subscription: Subscription = new Subscription();


  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.subscription = this.searchQuerySubject
      .pipe(debounceTime(500))
      .subscribe(query => {
        this.searchItems(query);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  closeModal(): void {
    this.close.emit();
  }

  searchItems(query: string): void {
    this.itemService.searchItems(query).subscribe(items => {
      this.searchResults = items;
    });
  }

  selectItem(item: Itemnameeffectdto): void {
    this.selectedItem = item;
    this.searchResults = [];
    this.searchQuery = item.itemName; // set input box to selected item's name
  }

  // submit(): void {
  //   const playerCharacterItemDto = new PlayerCharacterItemDto();
  //   playerCharacterItemDto.isEquipped = this.isEquipped;
  //   playerCharacterItemDto.upgradeTier = this.upgradeTier;

  //   this.submitData.emit({ itemId: this.selectedItem!.id, playerCharacterItemDto });
  //   this.closeModal();
  // }
  submit(): void {
    const playerCharacterItemDto = new PlayerCharacterItemDto();
    playerCharacterItemDto.isEquipped = this.isEquipped;
    playerCharacterItemDto.upgradeTier = this.upgradeTier;
  
    this.submitData.emit({
      itemId: this.selectedItem!.id,
      itemName: this.selectedItem!.itemName,
      playerCharacterItemDto,
    });
    this.closeModal();
  }
  
  
}
