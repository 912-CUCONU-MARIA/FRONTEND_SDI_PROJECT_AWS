import { HttpClient,HttpParams } from '@angular/common/http';
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
  //  baseUrl = 'http://ec2-16-170-133-85.eu-north-1.compute.amazonaws.com/api';
  //private baseURL = 'http://ec2-13-48-3-156.eu-north-1.compute.amazonaws.com/api';
  //private baseURL="/api";
  private baseURL="/api"
  constructor(private httpClient:HttpClient) { }

  // getGameusersList():Observable<Gameuser[]>{
  //       return this.httpClient.get<Gameuser[]>(`${this.baseURL}/gameusers`);
  //   }

  getGameusersList(page: number, size: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.httpClient.get<any>(`${this.baseURL}/gameusers`, { params: params });
  }

  createGameuser(gameuser:Gameuser):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/gameusers`,gameuser);
  }

  getGameUsersOrderedByAverageLevelOfPlayerCharacters(): Observable<Gameuseraverageplayercharacterleveldto[]> {
    return this.httpClient.get<Gameuseraverageplayercharacterleveldto[]>(`${this.baseURL}/gameusers/averageplayercharacterlevel`);
  }

  getGameuserById(id:number): Observable<Gameuser>{
    return this.httpClient.get<Gameuser>(`${this.baseURL}/gameusers/${id}`);
  }

  updateGameuser(id:number, gameuser:Gameuser):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/gameusers/${id}`,gameuser);
  }

  deleteGameuser(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/gameusers/${id}`);
  }

}
