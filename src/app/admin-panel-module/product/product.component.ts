import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendapiService } from '../services/backendapi.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private _activated:ActivatedRoute,private _backend:BackendapiService,private _router:Router) { }
  isLoad = false;
  product:any;
  attributeIndex = 0;
  isAttributeMode = false;
  ngOnInit() {
    this._activated.params.subscribe((res)=>{
      this.getProduct(res.id);
    },(err)=>{
      console.log(err);
    });
  }
  getProduct(id){
    this._backend.getProduct(id).subscribe((res:any)=>{
      console.log(res);
      this.isLoad = true;
      if(res.status){
        this.product = res.data;
      }else{
        console.log("error");
      }
    })
  }
  changeToAttributeMode(index){
    if(index == this.attributeIndex){
      this.isAttributeMode = !this.isAttributeMode;
    }else{
      this.isAttributeMode = true;
    }
    this.attributeIndex = index;
  }
  deleteProduct(id){
    let isDel = confirm("Would you like to delete ?");
    if(isDel){
      this._backend.deleteProduct(id).subscribe((res:any)=>{
        if(res.status){
          this._router.navigate(['/adminpanel/admin/products'])
        }
      });
    }else{
      console.log("not deleted");
    }
  }

  disable(id){
    let isDis = confirm("Would you like to disable ?");
    if(isDis){
      this._backend.disableProduct(id).subscribe((res:any)=>{
        console.log(res);
        if(res.status){
          this._router.navigate(["/adminpanel/admin/products"]);
        }else{
          console.log("error while updating");
        }
      });
    }else{
      console.log("Not want to disable !");
    }
  }
}
