import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Router } from '@angular/router';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  identity: string;
  token: string;
  stats: any;
  private URL = 'http://localhost:3500/api'
  constructor(private http: HttpClient, private router: Router) { }
  signUp(user){
    return this.http.post<any>(this.URL + '/signup', user)
  }
  login(user){
    return this.http.post<any>(this.URL + '/login', user)
  }
  loggedIn(){
    return !!localStorage.getItem('token');
  }
  getToken(){
    return localStorage.getItem('token');
  }
  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login'])
  }
  getIdentity(){
    let identity = JSON.parse(localStorage.getItem('user'));
    if(identity != "undefined"){
      this.identity = identity
    }else{
      this.identity = null;
    }
    return this.identity;
  }
  updateUser(user:User){
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken()) 
    return this.http.put(this.URL + 'update-user/' + user._id, params, {headers: headers});
  }
  getUsers(page = null){
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken())
    return this.http.get(this.URL + '/users/'+page, {headers: headers});
  }
  getUser(id){
    console.log(id)
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken())
    return this.http.get(this.URL + '/user/'+id, {headers: headers});
  }
}
