import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

import {Item} from './item';
import { Itemnameeffectdto } from './itemnameeffectdto';
import { ItemStatisticPlayerCharacterDto } from './ItemStatisticPlayerCharacterDto';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private baseURL="/api"
  constructor(private httpClient:HttpClient) { }

  getItemsList(
    page: number,
    size: number,
    ): Observable<any> {
    let params = new HttpParams()
      .set("page", page.toString())
      .set("size", size.toString());

    return this.httpClient.get<any>(`${this.baseURL}/items`, {
      params: params,
    });
  }

  getItemsOrderedByNumberOfCopies(
    page: number,
    size: number
  ): Observable<any> {
    let params = new HttpParams()
          .set("page", page.toString())
          .set("size", size.toString());
    return this.httpClient.get<ItemStatisticPlayerCharacterDto[]>(`${this.baseURL}/items/sortedbynumberofcopies`, {
      params: params,
    });
  }

  createItem(item:Item):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/items`,item);
  }

  getItemById(id:number): Observable<Item>{
    return this.httpClient.get<Item>(`${this.baseURL}/items/${id}`);
  }

  updateItem(id:number, item:Item):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/items/${id}`,item);
  }

  deleteItem(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/items/${id}`);
  }

  searchItems(query: string): Observable<Itemnameeffectdto[]> {
    let params = new HttpParams().set('name', query);
    return this.httpClient.get<Itemnameeffectdto[]>(`${this.baseURL}/items/search`, { params });
  }

}
