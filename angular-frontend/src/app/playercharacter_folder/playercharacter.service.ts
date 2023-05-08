import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

import {Playercharacter} from './playercharacter';
import { Playercharacterusername } from './playercharacterusername';

@Injectable({
  providedIn: 'root'
})
export class PlayercharacterService {

  private baseURL="/api"
  constructor(private httpClient:HttpClient) { }

  // getPlayercharactersList(
  //   page: number,
  //   size: number,
  //   ): Observable<any> {
  //   let params = new HttpParams()
  //     .set("page", page.toString())
  //     .set("size", size.toString());

  //   return this.httpClient.get<any>(`${this.baseURL}/playercharacters`, {
  //     params: params,
  //   });
  // }
  getPlayercharactersList(params: HttpParams): Observable<any> {
    return this.httpClient.get<any>(`${this.baseURL}/playercharacters`, {
      params: params,
    });
  }

  // Add a new method for fetching filtered player characters
getPlayercharactersByLevel(params: HttpParams): Observable<any> {
  const level = params.get('level');
  params = params.delete('level');
  return this.httpClient.get<any>(
    `${this.baseURL}/playercharacters/levelGreaterThan/${level}`,
    {
      params: params,
    }
  );
}

  createPlayercharacter(playercharacter:Playercharacter):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/playercharacters`,playercharacter);
  }

  getPlayercharacterById(id:number): Observable<Playercharacterusername>{
    return this.httpClient.get<Playercharacterusername>(`${this.baseURL}/playercharacters/${id}`);
  }

  updatePlayercharacter(id:number, playercharacter:Playercharacter):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/playercharacters/${id}`,playercharacter);
  }

  deletePlayercharacter(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/playercharacters/${id}`);
  }


}
