import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private baseUrl = 'http://localhost:3000';
  private endpoint = 'itens';
  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Item[]>{ 
    return this.httpClient.get<Item[]>(`${this.baseUrl}/${this.endpoint}`);
  }

  cadastrar(item: Item):Observable<Item> {
    return this.httpClient.post<Item>(`${this.baseUrl}/${this.endpoint}`, item);
  }
}