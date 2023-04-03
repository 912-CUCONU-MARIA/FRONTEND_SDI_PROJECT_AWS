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
  //private baseURL="http://localhost:80/gameusers"
  private baseURL="http://13.48.3.156:80/gameusers"
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

  getGameuserById(id:number): Observable<Gameuser>{
    return this.httpClient.get<Gameuser>(`${this.baseURL}/${id}`);
  }

  updateGameuser(id:number, gameuser:Gameuser):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,gameuser);
  }

  deleteGameuser(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
