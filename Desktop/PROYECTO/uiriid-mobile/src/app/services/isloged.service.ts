import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TokenService } from './token.service';
import { UserService } from './user.service';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class IslogedService {
  isLoged;
  constructor(
    private router: Router,
    private storage: Storage,
    private tokenService: TokenService,
    
  ) { }
  async canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean>{
    await this.storage.create();
    
    const token = await this.storage.get('auth-token')    
    
    if(token){
        this.tokenService.verifyExpirtion(token).subscribe(
          res=>{
            console.log(res)
            return true
          },
          err => {
            console.log(err)
            localStorage.removeItem('_ionicstorage/_ionickv/auth-user');
            localStorage.removeItem('_ionicstorage/_ionickv/auth-token');

            this.router.navigate(['/offlinetab/login'])
          }
        )
      
      
    }else{
      localStorage.removeItem('_ionicstorage/_ionickv/auth-user');
      localStorage.removeItem('_ionicstorage/_ionickv/auth-token');

      this.router.navigate(['/offlinetab/login'])
      return true
    }
  }
}