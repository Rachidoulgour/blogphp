import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { TokenService } from './token.service';
import { UserService } from './user.service';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class UserguardService {

  constructor(
    private router: Router,
    private storage: Storage,
    private tokenService: TokenService
  ) { }
  async canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean>{
   
    await this.storage.create();
    const identity = await JSON.parse(await this.storage.get('auth-user'))
    
    if(identity && (identity['tanbatt']=="AMST3ML" || identity['tanbatt']=="ANBBAT_AMKRAN")){
      return true;
    }else{
      this.router.navigate(['/offlinetab/login'])
    }
  }
}
