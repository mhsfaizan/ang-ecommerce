import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BackendapiService } from '../services/backendapi.service';
import { Router } from '@angular/router';
interface MyResponse{
   data:{},
   status:boolean
}
@Component({
  selector: 'app-d-login',
  templateUrl: './d-login.component.html',
  styleUrls: ['./d-login.component.css']
})
export class DLoginComponent implements OnInit {
  hide = true;
  isLogin = false;
  constructor(private _backend:BackendapiService,private _router:Router) { }
  adminLoginForm:FormGroup;
  ngOnInit() {
    this.init();
  }
  init(){
    this.adminLoginForm = new FormGroup({
      username:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    })
  }
  login(){
    this.isLogin = true;
    this._backend.login(this.adminLoginForm).subscribe((res:MyResponse)=>{
      this.isLogin = false;
      if(res.status){
        localStorage.setItem("user",JSON.stringify(res.data));
        console.log(res);
        this._router.navigate(['/adminpanel/admin/products']);
      }else{
        console.log("error");
      }
    },(err)=>{
      this.isLogin = false;
    })
  }
}
