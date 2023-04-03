import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Gameuser } from './gameuser';
import {Gameuseraverageplayercharacterleveldto} from './gameuseraverageplayercharacterleveldto';
@Injectable({
  providedIn: 'root'
})
export class GameuserService {

  //change this for cloud ip
  private baseURL="http://localhost:80/gameusers"
  constructor(private httpClient:HttpClient) { }

  getGameusersList():Observable<Gameuser[]>{
      return this.httpClient.get<Gameuser[]>(`${this.baseURL}`);
  }

  createGameuser(gameuser:Gameuser):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,gameuser);
  }

  getGameUsersOrderedByAverageLevelOfPlayerCharacters(): Observable<Gameuseraverageplayercharacterleveldto[]> {
    return this.httpClient.get<Gameuseraverageplayercharacterleveldto[]>(`${this.baseURL}/averageplayercharacterlevel`);
  }

}
