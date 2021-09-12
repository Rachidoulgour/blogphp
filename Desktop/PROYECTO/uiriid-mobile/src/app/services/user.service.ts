import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from './token.service';
import { Storage } from '@ionic/storage';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  identity: string;
  token;
  stats: any;
  private URL ="http://localhost:3000/api"
  constructor(private http: HttpClient, private router: Router,
    private tokenService: TokenService,
    private storage: Storage
) { }
async getToken() {
  return this.token = await this.tokenService.GetPayload();
}
  getUser(id, token){
    
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token)
    return this.http.get(this.URL + '/user/'+id, {headers: headers});
  }

  updateUser(user:User, token){

    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token) 
    return this.http.put(this.URL + '/update-user/' + user._id, params, {headers: headers});
  }

}
