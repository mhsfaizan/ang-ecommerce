import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-add-price',
  templateUrl: './add-price.component.html',
  styleUrls: ['./add-price.component.css']
})
export class AddPriceComponent implements OnInit {
  images:any = [];
  constructor(public dialogRef: MatDialogRef<AddPriceComponent>,private _domSani:DomSanitizer) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.init();
  }
  priceForm: FormGroup;
  sizes = ['xxl', 'xl', 'l', 'sm', 'xsm'];
  colors = ["red", "green", "yellow"];
  init() {
    this.priceForm = new FormGroup({
      size: new FormControl('', Validators.required),
      color: new FormControl('', Validators.required),
      markedPrice: new FormControl('', Validators.required),
      sellingPrice: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required)
    })
  }
  addImage(images, input) {
    for (let file of input.files) {
      images.push({
        file: file,
        url: this._domSani.bypassSecurityTrustUrl(URL.createObjectURL(file))
      });
    }
    this.priceForm.addControl('images',new FormControl(this.images));
  }


  removeImage(images, index) {
    images.splice(index, 1);
  }

}
