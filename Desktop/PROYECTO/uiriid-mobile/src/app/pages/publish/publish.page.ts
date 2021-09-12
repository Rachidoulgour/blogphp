import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Publication } from 'src/app/interfaces/Publication';
import { PublicationService } from 'src/app/services/publication.service';
import { UploadService } from 'src/app/services/upload.service';
import { UserService } from 'src/app/services/user.service';
import { Storage } from '@ionic/storage';
import { TokenService } from 'src/app/services/token.service';

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
  selector: 'app-publish',
  templateUrl: './publish.page.html',
  styleUrls: ['./publish.page.scss'],
})
export class PublishPage implements OnInit {

  public identity;
  public token;
  public status;
  error500;
  file: File;
  photoSelected: string | ArrayBuffer;
  public bookProduct: Publication;

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
    { name: 'Historia' },
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
  purposes: Purpose[] = [
    { name: 'Oferta' },
    { name: 'Demanda' },
  ];

  private URL = "http://localhost:3000/api";
  pub: any;
  form: FormGroup;
  constructor(
    private userService: UserService,
    private publicationService: PublicationService,
    private uploadService: UploadService,
    private tokenService: TokenService,
    private storage: Storage,
    
    private router: Router
  ) {
    this.form = new FormGroup({
      purpose:  new FormControl(null, {
        validators: [Validators.required]
      }),
      title: new FormControl(null, {
        validators: [Validators.required]
      }),
      author:  new FormControl(null, {
        validators: [Validators.required]
      }),
      text: new FormControl(null, {
        validators: [Validators.required]
      }),
      file:  new FormControl(null),
      genre:  new FormControl(null, {
        validators: [Validators.required]
      }),
      contactPhone:  new FormControl(null, {
        validators: [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(9), Validators.maxLength(9)]
      }),
      language:  new FormControl(null, {
        validators: [Validators.required]
      }),
      city:  new FormControl(null, {
        validators: [Validators.required]
      }),
      // province:  new FormControl(null, {
      //   validators: [Validators.required]
      // }),
      price:  new FormControl(null, {
        
      }),
      
    })
    //this.identity = this.userService.getIdentity();
    //this.token = this.userService.getToken();
  }

  async ngOnInit() {
    await this.storage.create();
      this.identity = await this.tokenService.GetUser();
      this.token = await this.tokenService.GetPayload();
    
  }

  onPhotoSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }

  }

  onSubmit() {
    console.log(this.form.status)
      if (this.form.status === "VALID"){
        const userId= this.identity._id
  
    this.publicationService.addBookProduct(userId, this.form.value, this.token).subscribe(
      res => {
        if (this.filesToUpload && this.filesToUpload.length) {
          //subir imagen
          this.uploadService.makeFileRequest(this.URL + '/upload-image-pub/' + res['publication']._id, [], this.filesToUpload, this.token, 'image')
            .then((result: any) => {
              
              // console.log(this.publication)
              // this.publication.file = result.image;
              // if(result['publication']['purpose'] === 'sell'){
              this.router.navigate(['/tab/home']);
              // }else {
              //   this.router.navigate(['/anuncios-de-compraventa/demandas']);
              // }
              
              this.status = 'success';
            });
        } else {
          console.log(res)
          // if(res['publication']['purpose'] === 'sell'){
            this.router.navigate(['/tab/home']);
            // }else {
            //   this.router.navigate(['/anuncios-de-compraventa/demandas']);
            // }
          this.status = 'success';
        }

      },
      err => {
        
        if (err != null) {
          this.status='error'
          if (err.status === 500) {
            this.error500 = err.status
          } else if (err.status === 401) {
            //this.userService.logOut();
          }
        }
      }
    )
    }
  }

  public filesToUpload: Array<File>;
  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }


}
