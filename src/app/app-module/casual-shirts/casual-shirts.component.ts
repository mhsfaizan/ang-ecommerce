import { Component, OnInit } from '@angular/core';
import { BackendProductService } from '../backend-product.service';

@Component({
  selector: 'app-casual-shirts',
  templateUrl: './casual-shirts.component.html',
  styleUrls: ['./casual-shirts.component.css']
})
export class CasualShirtsComponent implements OnInit {
  isLoad = false;
  constructor(private _backend:BackendProductService) { } 

  ngOnInit() {
    this.getProducts();
  }
  casualShirts:any;
  getProducts(){
    this._backend.getFormalShirts("Men","Casual Shirts").subscribe((res:any)=>{
      this.isLoad = true;
      if(res.status){
        this.casualShirts = res.data;
      }else{
        console.log("no data");
      }
    })
  }

}
