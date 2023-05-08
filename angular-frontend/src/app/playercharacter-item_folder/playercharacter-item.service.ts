import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlayerCharacterItemDto } from './player-character-item-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayercharacterItemService {

  private baseURL = '/api';

  constructor(private httpClient: HttpClient) { }

  addItemToPlayerCharacter(playerChId: number, itemId: number, playerCharacterItemDto: PlayerCharacterItemDto): Observable<any> {
    return this.httpClient.post<any>(`${this.baseURL}/playercharacters/${playerChId}/items/${itemId}`, playerCharacterItemDto);
  }

  getPlayerCharacterItems(playerChId: number, page: number, size: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseURL}/playercharacters/${playerChId}/items?page=${page}&size=${size}`);
  }
  
  updatePlayerCharacterItem(playerChId: number, itemId: number, playerCharacterItemDto: PlayerCharacterItemDto): Observable<any> {
    return this.httpClient.put<any>(`${this.baseURL}/playercharacters/${playerChId}/items/${itemId}`, playerCharacterItemDto);
  }
  
  deletePlayerCharacterItem(playerChId: number, pciId: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseURL}/playercharacters/${playerChId}/items/${pciId}`);
  }


}
