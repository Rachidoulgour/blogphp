import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PhotoserviceService} from '../../services/photoservice.service'
import {Photo} from '../../interfaces/Photo';
@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];
  constructor(private photoserviceService: PhotoserviceService, private router: Router) { }

  ngOnInit() {
    this.photoserviceService.getPhotos()
    .subscribe(res => {this.photos = res;
    },
    err => console.log(err))
  };
  selectedPub(id: string){
    if(localStorage.getItem('token')){this.router.navigate(['/photos', id])};
  }

}
