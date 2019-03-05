import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BackendapiService } from './services/backendapi.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private _backend:BackendapiService,private _router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this._backend.isLoggedIn().pipe(map(res=>{
        if(res){
          return true;
        }else{
          this._router.navigate(["/adminpanel/admin/auth"]);
        }
      }))
  }
}
