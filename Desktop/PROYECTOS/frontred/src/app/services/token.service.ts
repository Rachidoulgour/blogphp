import { Injectable } from '@angular/core';
import { HttpInterceptor} from '@angular/common/http';
import { UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor {

  constructor(private userService: UserService) { }

  intercept(req, next){
    const tokenReq=req.clone({
      setHeaders:{
        //Authorization: `Bearer ${this.userService.getToken()}`
        Authorization: `${this.userService.getToken()}`
        
      }
    })
    return next.handle(tokenReq);
  }

}
