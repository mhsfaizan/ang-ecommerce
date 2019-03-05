import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendProductService } from '../backend-product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  constructor(private _activated: ActivatedRoute, private _backend: BackendProductService, private _router: Router) { }
  isLoad = false;
  product: any;
  attributeIndex = 0;
  isAttributeMode = false;
  ngOnInit() {
    this._activated.params.subscribe((res) => {
      this.getProduct(res.id);
    }, (err) => {
      console.log(err);
    });
  }
  getProduct(id) {
    this._backend.getProduct(id).subscribe((res: any) => {
      console.log(res);
      this.isLoad = true;
      if (res.status) {
        this.product = res.data;
      } else {
        console.log("error");
      }
    })
  }
  changeToAttributeMode(index) {
    if (index == this.attributeIndex) {
      this.isAttributeMode = !this.isAttributeMode;
    } else {
      this.isAttributeMode = true;
    }
    this.attributeIndex = index;
  }
}
