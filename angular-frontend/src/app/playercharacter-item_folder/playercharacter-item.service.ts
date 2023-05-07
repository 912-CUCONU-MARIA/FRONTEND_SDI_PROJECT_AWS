import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlayerCharacterItemDto } from './player-character-item-dto';

@Injectable({
  providedIn: 'root'
})
export class PlayercharacterItemService {

  private baseURL = '/api';

  constructor(private httpClient: HttpClient) { }

  addItemToPlayerCharacter(playerChId: number, itemId: number, playerCharacterItemDto: PlayerCharacterItemDto): void {
    this.httpClient.post<PlayerCharacterItemDto>(`${this.baseURL}/playercharacters/${playerChId}/items/${itemId}`, playerCharacterItemDto).subscribe(response => {
      console.log('Item added successfully', response);
    });
  }
}
