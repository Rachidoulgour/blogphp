import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  token;
  private URL = "http://localhost:3000/api";
  constructor(
    private http:HttpClient,
    private tokenService: TokenService,
    private storage: Storage
  ) { 
    this.storage.create();
    //this.token = this.tokenService.GetPayload();
    //console.log(this.token)
  }
  async getToken() {
    return this.token = await this.tokenService.GetPayload();
  }

  getHomepageExchangeBooks(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.get(this.URL + '/home-exchange-books/' ,{headers});
  }
  getHomepageDonationBooks(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json') 
    return this.http.get(this.URL + '/home-donation-books/' ,{headers});
  }
  getHomepageSellBooks(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json') 
    return this.http.get(this.URL + '/home-sell-books/' ,{headers});
  }
  getHomepageDemandBooks(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json') 
    return this.http.get(this.URL + '/home-demand-books/' ,{headers});
  }

  getPublications(page, city, searchQuery): Observable<any>{
    
    let params = new HttpParams().set('searchQuery',searchQuery).set('city', city)
    //let params = JSON.stringify(filters);
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.get(this.URL + '/publications/' +page, {
      headers,
    params});
  }

  getOfferBooks(page, city, searchQuery): Observable<any>{
    
    let params = new HttpParams().set('searchQuery',searchQuery).set('city', city)
    //let params = JSON.stringify(filters);
    let headers = new HttpHeaders().set('Content-Type', 'application/json') 
    return this.http.get(this.URL + `/offer-books/page=${page}`, {
      headers,
    params});
  }

  getDonationBooks(page, city, searchQuery): Observable<any>{
    
    let params = new HttpParams().set('searchQuery',searchQuery).set('city', city)
    //let params = JSON.stringify(filters);
    let headers = new HttpHeaders().set('Content-Type', 'application/json') 
    return this.http.get(this.URL + `/donation-books/page=${page}`, {
      headers,
    params});
  }

  getPublicationById(id){   
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.get(this.URL + '/publication/'+id, {headers: headers});
  }

  getPublicationsUser(token, user_id, page=1){
    
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token)
    return this.http.get(this.URL + '/publications-user/'+user_id+'/' +page, {headers: headers});
  }

  addBookProduct(userId, publication, token){
    let params = JSON.stringify(publication);
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token) 
    return this.http.post(this.URL + '/bookproduct-publish/'+userId, params, {headers});
  }

  editPublication(token, publication, id){
    let params = JSON.stringify(publication);
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token)
    return this.http.put(this.URL + '/update-publication/'+id, params, {headers: headers});
  }


  deletePublication(token, id){
    
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.token) 
    return this.http.put(this.URL + '/publication/' +id, {headers: headers});
  }

  addToFavorits(token, favorit){
    let params = JSON.stringify(favorit);
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.token) 
    return this.http.post(this.URL + '/favorit', params, {headers: headers});
  }

  getFavoritsUser(token, user_id, page=1){
    
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token) 
    return this.http.get(this.URL + '/favorits-user/'+user_id+'/' +page, {headers: headers});
  }
  getFavoritByPubAndUser(token, user_id, publication_id){
    
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.token) 
    return this.http.get(this.URL + '/favorit-publication-user/'+user_id+'/' +publication_id, {headers: headers});
  }

  sendPetition(permission){
    let params = JSON.stringify(permission);
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.token) 
    return this.http.post(this.URL + '/permission', params, {headers: headers});
  }

  getUserPetitions(id){
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.token) 
    return this.http.get(this.URL + '/permissions-user/'+id, {headers: headers});
  }
  getUserAcceptedPetitions(id){
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.token)  
    return this.http.get(this.URL + '/accepted-petitions-user/'+id, {headers: headers});
  }
  getPermissionByPubAndUser(token, user_id, publication_id){
    
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.token) 
    return this.http.get(this.URL + '/permission-publication-user/'+user_id+'/' +publication_id, {headers: headers});
  }
  acceptPermission(id, permission_id){
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.token) 
    return this.http.put(this.URL + '/accept-permission/'+id +'/'+permission_id, {headers: headers});
  }
  refusePermission(id, permission_id){
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.token) 
    return this.http.delete(this.URL + '/refuse-permission/'+id+'/'+permission_id, {headers: headers});
  }

  markPermissionAsViewed(id, permission_id){
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.token) 
    return this.http.put(this.URL + '/mark-viewed-permission/'+id +'/'+permission_id, {headers: headers});
  }
}
