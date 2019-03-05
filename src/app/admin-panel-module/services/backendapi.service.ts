import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BackendapiService {
  url = "http://localhost:8080/";
  // url = "/";
  user: boolean;
  constructor(private _http: HttpClient) { }
  login(data: FormGroup) {
    return this._http.post(this.url + "auth/login", data.value, {
      withCredentials: true
    });
  }
  isLoggedIn() {
    return this._http.get(this.url + 'auth/login', { withCredentials: true });
  }
  logout() {
    localStorage.removeItem("user");
    return this._http.get(this.url + 'auth/logout', { withCredentials: true });
  }
  getCategories() {
    return this._http.get("/assets/json/category.json");
  }
  uploadProduct(product) {
    let productForm = this.converToForm(product);
    return this._http.post(this.url + "product/product", productForm, {
      withCredentials: true
    });
  }
  getProducts() {
    return this._http.get(this.url + "product/product",{
      withCredentials:true
    })
  }

  getProduct(id){
    return this._http.get(this.url+"product/product/"+id,{
      withCredentials:true
    })
  }


  deleteProduct(id){
    return this._http.delete(this.url+"product/product/"+id,{
      withCredentials:true
    });
  }

  disableProduct(id){
    return this._http.get(this.url+"product/update-product/"+id,{
      withCredentials:true
    })
  }

  converToForm(product) {
    let fd = new FormData();
    for (let index in product) {
      if (index == "category") {
        product[index] = product[index].category;
      }
      if (index == "attributes") {
        let j = 0;
        for (let image of product[index]) {
          for (let i in image.images) {
            fd.append("" + j + "", image.images[i].file);
          }
          j++;
          image.images = [];
        }
        product[index] = JSON.stringify(product[index]);
      }
      if (index != "commonImages") {
        fd.append(index, product[index]);
      } else {
        for (let image of product[index]) {
          fd.append("cImages", image.file);
        }
      }

    }
    return fd;
  }

} 
