import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {PhotoserviceService} from '../../services/photoservice.service'
import {Photo} from '../../interfaces/Photo';

@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.component.html',
  styleUrls: ['./photo-preview.component.scss']
})
export class PhotoPreviewComponent implements OnInit {
  id: string;
  photo: Photo;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private photoserviceService: PhotoserviceService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.photoserviceService.getimage(this.id)
      .subscribe(
        res => {this.photo = res;},
        err =>  console.log(err)
      )
    })
  }
  deletePhoto(id: string) {
    this.photoserviceService.deletePhoto(id)
    .subscribe(
      res => {console.log(res)
      this.router.navigate(['/photos'])
    },
      err => console.log(err)
    )
  }

  updatePhoto(title: HTMLInputElement, description: HTMLTextAreaElement): boolean{
    this.photoserviceService.updatePhoto(this.id, title.value, description.value)
    .subscribe(
      res => {
        this.router.navigate(['/photos'])
      },
      err => console.log(err)
    )
    return false;
  }

}
