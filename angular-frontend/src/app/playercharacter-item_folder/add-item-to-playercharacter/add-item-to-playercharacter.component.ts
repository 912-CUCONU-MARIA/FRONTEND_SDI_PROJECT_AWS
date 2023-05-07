import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from 'src/app/item_folder/item';
import { ItemService } from 'src/app/item_folder/item.service';
import { Itemnameeffectdto } from 'src/app/item_folder/itemnameeffectdto';
import { PlayerCharacterItemDto } from '../player-character-item-dto';

@Component({
  selector: 'app-add-item-to-playercharacter',
  templateUrl: './add-item-to-playercharacter.component.html',
  styleUrls: ['./add-item-to-playercharacter.component.css']
})
export class AddItemToPlayercharacterComponent {
  @Output() close = new EventEmitter<void>();
  @Output() submitData = new EventEmitter<{ itemId: number; playerCharacterItemDto: PlayerCharacterItemDto }>();

  searchQuery: string = '';
  searchResults: Itemnameeffectdto[] = [];
  selectedItem: Itemnameeffectdto | null = null;
  isEquipped: boolean = false;
  upgradeTier: number = 0;

  constructor(private itemService: ItemService) { }

  closeModal(): void {
    this.close.emit();
  }

  searchItems(): void {
    this.itemService.searchItems(this.searchQuery).subscribe(items => {
      this.searchResults = items;
    });
  }

  selectItem(item: Itemnameeffectdto): void {
    this.selectedItem = item;
    this.searchResults = [];
  }

  submit(): void {
    const playerCharacterItemDto = new PlayerCharacterItemDto();
    playerCharacterItemDto.isEquipped = this.isEquipped;
    playerCharacterItemDto.upgradeTier = this.upgradeTier;

    this.submitData.emit({ itemId: this.selectedItem!.id, playerCharacterItemDto });
    this.closeModal();
  }
  
}
