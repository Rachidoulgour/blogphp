import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private URL = "http://localhost:3000/api";
  identity: string;
  constructor(private storage: Storage,
    private router: Router,
    private http:HttpClient) { }
  
  SetToken(token) {
    return this.storage.set('auth-token', token);
  }

  SetUser(user) {
    return this.storage.set('auth-user', user);
  }

 async GetUser(){
  const identity = await JSON.parse(await this.storage.get('auth-user'))
  return identity
  
  // if(identity != "undefined"){
  //   this.identity = identity
  // }else{
  //   this.identity = null;
  // }
  // return this.identity;
 
  }

  DeleteToken() {
    return this.storage.remove('auth-token');
  }

  async GetPayload() {
    const token = await this.storage.get('auth-token')
    
    let payload;
    if(token){
      
      payload = token.split('.')[1];
      payload = JSON.parse(window.atob(payload))
    }
   
    return token
  }

  async loggedIn(){
    return !!await this.storage.get('auth-token') && !!JSON.parse(await this.storage.get('auth-user'));
  }

  async logOut(){
    await this.storage.clear();
    await this.SetToken("")
    console.log("logout")
    
    await this.storage.remove('_ionicstorage/_ionickv/auth-user');
    await this.storage.remove('auth-user');
    //this.router.navigate(['/offlinetab/login'])
  }

  verifyExpirtion(token){
    let params = new HttpParams().set('token',token)
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.get(this.URL + '/verify-token', {
      headers,
      params});
   }
}


