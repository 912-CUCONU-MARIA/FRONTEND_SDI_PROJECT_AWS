import { Component,OnInit } from '@angular/core';
import { Playercharacterusername } from '../playercharacterusername';
import { ActivatedRoute } from '@angular/router';
import { PlayercharacterService } from '../playercharacter.service';
import { PlayercharacterItemService } from 'src/app/playercharacter-item_folder/playercharacter-item.service';
import { PlayerCharacterItemDto } from 'src/app/playercharacter-item_folder/player-character-item-dto';


@Component({
  selector: 'app-playercharacter-details',
  templateUrl: './playercharacter-details.component.html',
  styleUrls: ['./playercharacter-details.component.css']
})
export class PlayercharacterDetailsComponent implements OnInit{

  id!:number
  playercharacter:Playercharacterusername=new Playercharacterusername();
  showAddItemModal: boolean = false;
  constructor(private route: ActivatedRoute, private playercharacterService: PlayercharacterService, private playerCharacterItemService: PlayercharacterItemService) {
  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.playercharacterService.getPlayercharacterById(this.id).subscribe(data=>{
      this.playercharacter=data;
    })
  }
  
  addItemToPlayercharacter(): void {
    this.showAddItemModal = true;
  }

  closeAddItemModal(): void {
    this.showAddItemModal = false;
  }

  addItemToPlayerCharacter(data: { itemId: number, playerCharacterItemDto: PlayerCharacterItemDto }): void {
    this.playerCharacterItemService.addItemToPlayerCharacter(this.id, data.itemId, data.playerCharacterItemDto);
    this.closeAddItemModal();
  }

}
