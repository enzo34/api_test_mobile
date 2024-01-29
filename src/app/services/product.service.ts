import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL: string = 'http://localhost:3000/product'

  constructor(private http: HttpClient) { }

  public getAllProducts() {
    return this.http.get(this.API_URL);
  }
}
