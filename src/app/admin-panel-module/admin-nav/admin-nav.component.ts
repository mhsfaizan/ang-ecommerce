import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BackendapiService } from '../services/backendapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,private _backend:BackendapiService,private _router:Router) {}
  logout(){
    this._backend.logout().subscribe((resp:any)=>{
      console.log(resp)
      if(resp.status){
        this._router.navigate(['/adminpanel/admin/auth']);
      }
    });
  }
}
