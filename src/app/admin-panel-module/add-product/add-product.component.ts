import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material';
import { MatDialog } from '@angular/material';
import { BackendapiService } from '../services/backendapi.service';
import { AddPriceComponent } from '../add-price/add-price.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private _domSani: DomSanitizer, private snackBar: MatSnackBar, public dialog: MatDialog,private _backend:BackendapiService,private _router:Router) { }
  product1Form: FormGroup;
  productInfo: any;
  productInfo2: any = [];
  tabIndex = 0;
  categories:any;
  priceInfo: any;
  subCategories:string[];
  commonImages: any = [];
  ngOnInit() {
    this._backend.getCategories().subscribe((res)=>{
      this.categories = res;
      this.subCategories = this.categories[0].subCategories;
    });
    this.init();
  }


  updateCat(subCategories:string[]){
    this.subCategories = subCategories;
  }


  init() {
    this.product1Form = new FormGroup({
      productName: new FormControl('', Validators.required),
      brandName: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      subCategory: new FormControl('', Validators.required)
    });
  }


  addImage(images, input) {
    for (let file of input.files) {
      images.push({
        file: file,
        url: this._domSani.bypassSecurityTrustUrl(URL.createObjectURL(file))
      });
    }
  }


  removeImage(images, index) {
    images.splice(index, 1);
  }

  save() {
    this.productInfo = this.product1Form.value;
    this.productInfo.commonImages = this.commonImages;
    this.snackBar.open("Succefully Saved", "Nice", {
      duration: 2000,
    });
    this.tabIndex++;
    // console.log(this.productInfo);
  }
  next() {
    this.productInfo = this.product1Form.value;
    this.productInfo.commonImages = this.commonImages;
    this.snackBar.open("Succefully Saved", "Nice", {
      duration: 2000,
    });
    this.tabIndex++;
  }
  openDia() {
    const dialogRef = this.dialog.open(AddPriceComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.productInfo2.push(result);
      }
      // console.log(this.productInfo2);
    });
  }
  upload(){
    let product = {...this.productInfo};
    product.attributes = this.productInfo2;
    // console.log(product);
    // console.log(this.productInfo);
    // console.log(this.productInfo2);
    this._backend.uploadProduct(product).subscribe((res:any)=>{
      if(res.status){
        this.snackBar.open("You Have Successfully Uploaded Product","Nice",{
          duration:1000
        })
        setTimeout(()=>{
          this._router.navigate(["/adminpanel/admin/products"]);
        },2000);
      }else{
        this.snackBar.open("Sorry! Product is not uploaded ", "Error", {
          duration: 2000,
        });
      }
    });

  }
}