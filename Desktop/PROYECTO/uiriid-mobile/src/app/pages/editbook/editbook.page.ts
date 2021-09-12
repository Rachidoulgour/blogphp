import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Publication } from 'src/app/interfaces/Publication';
import { PublicationService } from 'src/app/services/publication.service';
import { UploadService } from 'src/app/services/upload.service';
import { UserService } from 'src/app/services/user.service';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
interface City {
  name: string;
}
interface Genre {
  name: string;
}

interface Language {
  name: string;
}

interface Purpose {
  name: string;
}

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.page.html',
  styleUrls: ['./editbook.page.scss'],
})
export class EditbookPage implements OnInit {

  public identity;
  public token;
  public status;
  file: File;
  id;
  error500;
  photoSelected: string | ArrayBuffer;
  public publication: Publication;
  private URL = "http://localhost:3000/api";

  purposes: Purpose[] = [
    { name: 'Exchange' },
    { name: 'Donation' }
  ];

  cities: City[] = [
    { name: 'Álava' },
    { name: 'Albacete' },
    { name: 'Alicante' },
    { name: 'Almería' },
    { name: 'Asturias' },
    { name: 'Ávila' },
    { name: 'Badajoz' },
    { name: 'Barcelona' },
    { name: 'Burgos' },
    { name: 'Cáceres' },
    { name: 'Cádiz' },
    { name: 'Cantabria' },
    { name: 'Castellón' },
    { name: 'Ciudad Real' },
    { name: 'Córdoba' },
    { name: 'Cuenca' },
    { name: 'Girona' },
    { name: 'Granada' },
    { name: 'Guadalajara' },
    { name: 'Gipuzkoa' },
    { name: 'Huelva' },
    { name: 'Huesca' },
    { name: 'Jaen' },
    { name: 'A Coruña' },
    { name: 'La Rioja' },
    { name: 'Las Palmas' },
    { name: 'León' },
    { name: 'Lugo' },
    { name: 'Madrid' },
    { name: 'Malaga' },
    { name: 'Murcia' },
    { name: 'Navarra' },
    { name: 'Ourense' },
    { name: 'Palencia' },
    { name: 'Pontevedra' },
    { name: 'Salamanca' },
    { name: 'Santa Cruz de Tenerife' },
    { name: 'Segovia' },
    { name: 'Sevilla' },
    { name: 'Soria' },
    { name: 'Tarragona' },
    { name: 'Teruel' },
    { name: 'Toledo' },
    { name: 'Valencia' },
    { name: 'Valladolid' },
    { name: 'Vizcaya' },
    { name: 'Zamora' },
    { name: 'Zaragoza' }
  ];

  genres: Genre[] = [
    { name: 'Literatura Narrativa' },
    { name: 'Poesía' },
    { name: 'Teatro' },
    { name: 'Aventura' },
    { name: 'Ciencia ficción' },
    { name: 'Terror' },
    { name: 'Humor' },
    { name: 'Ciencias humanas y sociales' },
    { name: 'Politica' },
    { name: 'Hitoria' },
    { name: 'Cocina' },
    { name: 'Psiclogía y pedagogía' },
    { name: 'Autoayuda' },
    { name: 'Idiomas' },
    { name: 'Juvenil' },
    { name: 'Infantil' },
    { name: 'Escolar' },
    { name: 'Medicina y salud' },
    { name: 'Economía y derecho' },
    { name: 'Comics y manga' },
    { name: 'Otro' },
  ];
  languages: Language[] = [
    { name: 'Español' },
    { name: 'Inglés' },
    { name: 'Francés' },
    { name: 'Alemán' },
    { name: 'Catalán o Valenciano' },
    { name: 'Italiano' },
    { name: 'Árabe' },
    { name: 'Otro' },
  ];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private publicationService: PublicationService,
    private uploadService: UploadService,
  ) {
    this.publication = <Publication><unknown>publicationService.getPublicationById(this.id);
    //this.identity = this.publication;
    this.token = userService.getToken();
  }

  ngOnInit(): void {
    this.loadPage()
  }
  loadPage() {
    this.route.params.subscribe(params => {
      this.id = params['id'];

      this.getPublicationById(this.id)

    })
  }
  getPublicationById(id) {
   
    this.publicationService.getPublicationById(id).subscribe(
      (res: any) => {
        this.publication = res['publication'];
      },
      err => {
        console.log(err);
        if (err.status === 500) {
          this.error500 = err.status
        } else if (err.status === 401) {
          //this.userService.logOut();
        }
      }
    )
  }
  onSubmit($event) {
    
    this.publicationService.editPublication(this.token, this.publication, this.id).subscribe(
      res => {
        if (this.filesToUpload && this.filesToUpload.length) {
          //subir imagen
          this.uploadService.makeFileRequest(this.URL + '/upload-image-pub/' + res['publication']._id, [], this.filesToUpload, this.token, 'image')
            .then((result: any) => {
              this.publication.file = result.image;
              console.log(result)
              this.router.navigate(['/timeline']);
              this.status = 'success';
            });
        } else {
          this.router.navigate(['/timeline']);
          this.status = 'success';
        }

      },
      err => {
        const errorMessage = err;
        console.log(errorMessage);
        if (errorMessage != null) {
          this.status = 'error'
        }
      }
    )
  }
  public filesToUpload: Array<File>;
  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}

