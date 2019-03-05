import { Component, OnInit } from '@angular/core';
import { BackendapiService } from '../services/backendapi.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private _backend:BackendapiService) { }
  isLoad = false;
  products:any;
  ngOnInit() {
    this._backend.getProducts().subscribe((res:any)=>{
      console.log(res);
      this.isLoad = true
      if(res){
        this.products = res.data;
      }else{
        console.log("Error");
      }
    });
  }

}
