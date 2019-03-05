import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
    searchForm:FormGroup;
    myInputWidth = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
  changeWidth(){
    this.myInputWidth = !this.myInputWidth;
  }
  ngOnInit(){
    this.searchForm = new FormGroup({
      query:new FormControl('',Validators.required)
    })
  }
  searchQuery():void{
    console.log(this.searchForm.value);
    this.searchForm.reset();
  }
}
