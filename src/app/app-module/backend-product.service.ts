import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendProductService {
  url = "http://localhost:8080/";
  // url="/";
  constructor(private _http:HttpClient) { }
  getFormalShirts(cat,subCat){
    return this._http.get(this.url+"app/product?category="+cat+"&subCategory="+subCat);
  }
  getProduct(id){
    return this._http.get(this.url+"app/product/"+id);
  }
}
