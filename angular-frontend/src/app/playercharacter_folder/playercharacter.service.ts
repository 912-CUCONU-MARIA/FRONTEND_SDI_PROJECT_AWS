import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

import {Playercharacter} from './playercharacter';

@Injectable({
  providedIn: 'root'
})
export class PlayercharacterService {

  private baseURL="/api"
  constructor(private httpClient:HttpClient) { }

  getPlayercharactersList(
    page: number,
    size: number,
    ): Observable<any> {
    let params = new HttpParams()
      .set("page", page.toString())
      .set("size", size.toString());

    return this.httpClient.get<any>(`${this.baseURL}/playercharacters`, {
      params: params,
    });
  }

  createPlayercharacter(playercharacter:Playercharacter):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/playercharacters`,playercharacter);
  }

  getPlayercharacterById(id:number): Observable<Playercharacter>{
    return this.httpClient.get<Playercharacter>(`${this.baseURL}/playercharacters/${id}`);
  }

  updatePlayercharacter(id:number, playercharacter:Playercharacter):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/playercharacters/${id}`,playercharacter);
  }

  deletePlayercharacter(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/playercharacters/${id}`);
  }
}
