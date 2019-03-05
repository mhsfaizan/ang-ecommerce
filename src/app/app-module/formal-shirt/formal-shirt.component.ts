import { Component, OnInit } from '@angular/core';
import { BackendProductService } from '../backend-product.service';

@Component({
  selector: 'app-formal-shirt',
  templateUrl: './formal-shirt.component.html',
  styleUrls: ['./formal-shirt.component.css']
})
export class FormalShirtComponent implements OnInit {

  constructor(private _backendPro:BackendProductService) { }
  isLoad = false;
  formalShirts:any;
  ngOnInit() {
    this.getFormalShirts();
  }
  getFormalShirts(){
    this._backendPro.getFormalShirts("Men","Formal Shirts").subscribe((res:any)=>{
      console.log(res);
      this.isLoad = true;
      if(res.status) {
        this.formalShirts = res.data;
      }else{
        console.log("Error");
      }
    });
  }
}
