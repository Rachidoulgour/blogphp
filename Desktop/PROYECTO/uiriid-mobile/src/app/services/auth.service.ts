import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL ="http://localhost:3000/api"
  constructor(
    private http: HttpClient
  ) { }

  signUp(user): Observable<any>{
    
    return this.http.post<any>(this.URL + '/signup', user)
  }

  logIn(user): Observable<any>{
    
    return this.http.post<any>(this.URL + '/login', user)
  }
}
