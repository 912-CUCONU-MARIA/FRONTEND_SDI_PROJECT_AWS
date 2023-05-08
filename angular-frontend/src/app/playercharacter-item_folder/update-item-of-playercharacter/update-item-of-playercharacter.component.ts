import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PlayerCharacterItemDto } from '../player-character-item-dto';
import { PlayerCharacterItemNameDto } from '../player-character-item-name-dto';

@Component({
  selector: 'app-update-item-of-playercharacter',
  templateUrl: './update-item-of-playercharacter.component.html',
  styleUrls: ['./update-item-of-playercharacter.component.css']
})
export class UpdateItemOfPlayercharacterComponent {
  @Input() currentItem!: PlayerCharacterItemNameDto;
  @Output() close: EventEmitter<void> = new EventEmitter();
  @Output() submitData: EventEmitter<PlayerCharacterItemDto> = new EventEmitter();

  updateItemForm: PlayerCharacterItemDto = {
    isEquipped: false,
    upgradeTier: 0
  };

  ngOnChanges(): void {
    if (this.currentItem) {
      this.updateItemForm.isEquipped = this.currentItem.isEquipped;
      this.updateItemForm.upgradeTier = this.currentItem.upgradeTier;
    }
  }

  submitForm(): void {
    this.submitData.emit(this.updateItemForm);
    this.closeModal();
  }

  closeModal(): void {
    this.close.emit();
  }
}
