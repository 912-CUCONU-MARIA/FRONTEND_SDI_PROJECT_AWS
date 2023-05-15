import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Gameuser } from './gameuser';
import {Gameuseraverageplayercharacterleveldto} from './gameuseraverageplayercharacterleveldto';
@Injectable({
  providedIn: 'root'
})
export class GameuserService {

  private baseURL="/api"
  constructor(private httpClient:HttpClient) { }

  // getGameusersList():Observable<Gameuser[]>{
  //       return this.httpClient.get<Gameuser[]>(`${this.baseURL}/gameusers`);
  //   }

    getGameusersList(
        page: number,
        size: number,
        sort: string | undefined = undefined,
        direction: string | undefined = undefined
      ): Observable<any> {
        let params = new HttpParams()
          .set("page", page.toString())
          .set("size", size.toString());

        if (sort && direction) {
          params = params.set("sort", sort).set("direction", direction);
        }

        return this.httpClient.get<any>(`${this.baseURL}/gameusers`, {
          params: params,
        });
      }



  createGameuser(gameuser:Gameuser):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/gameusers`,gameuser);
  }

  getGameUsersOrderedByAverageLevelOfPlayerCharacters(
    page: number,
    size: number
  ): Observable<any> {
    let params = new HttpParams()
          .set("page", page.toString())
          .set("size", size.toString());
    return this.httpClient.get<Gameuseraverageplayercharacterleveldto[]>(`${this.baseURL}/gameusers/averageplayercharacterlevel`, {
      params: params,
    });
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
