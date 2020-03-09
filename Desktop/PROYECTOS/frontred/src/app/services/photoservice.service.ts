import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


import {Photo} from '../interfaces/Photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoserviceService {

  URI = 'http://localhost:3500/api/photos';

  constructor(private http: HttpClient) { }

  createPhoto(title: string, description: string, photo: File){
    const fdata = new FormData();
    fdata.append('title', title);
    fdata.append('description', description);
    fdata.append('image', photo);
    return this.http.post(this.URI, fdata);
  }

  getPhotos(){
    return this.http.get<Photo[]>(this.URI);
  }
  getimage(id: string){
    return this.http.get<Photo>(`${this.URI}/${id}`)
  }
  deletePhoto(id: string) {
    return this.http.delete(`${this.URI}/${id}`);
  }
  updatePhoto(id: string, title: string, description: string){
    return this.http.put(`${this.URI}/${id}`, {title, description});
  }

}
