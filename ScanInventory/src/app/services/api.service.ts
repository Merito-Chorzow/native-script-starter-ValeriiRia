import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + "?_limit=10");
  }
}