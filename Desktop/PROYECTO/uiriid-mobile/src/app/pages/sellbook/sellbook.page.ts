import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';

import { PublicationService } from '../../services/publication.service';
import { User } from '../../interfaces/User';
import { MatDialog } from '@angular/material/dialog';

//import { offerBook } from '../../interfaces/BookProduct';
import { environment } from '../../../environments/environment.prod';
import { Permission } from 'src/app/interfaces/Permission';
import { FormControl, FormGroup } from '@angular/forms';
import { Publication } from 'src/app/interfaces/publication';
import { TokenService } from 'src/app/services/token.service';
//import { BookProduct } from 'src/app/interfaces/BookProduct';

interface City {
  name: string;
}

@Component({
  selector: 'app-sellbook',
  templateUrl: './sellbook.page.html',
  styleUrls: ['./sellbook.page.scss'],
})
export class SellbookPage implements OnInit {
  form: FormGroup;
  identity;
  token;
  url: string;
  status: string;
  page;
  total;
  pages;
  itemsPerPage: any;
  offerBooks: Publication[];
  public offerBook: Publication;
  permission: Permission;
  //private URL = "http:localhost:3000/api";
  unreed: number;
  unseenPetitions;
  receivedpetitions;
  error500;
  city: String = '';
  searchQuery: String = '';

  value = '';
  panelOpenState = false;

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
  selectedCity;
  adding: boolean;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private publicationService: PublicationService,
    private tokenService: TokenService,
    public dialog: MatDialog) {
    //   this.identity = this.userService.getIdentity();
    // this.token = this.userService.getToken();
    this.form = new FormGroup({
      searchQuery: new FormControl('', {
      }),
      city: new FormControl('', {
        
      })
    })
    this.page = 1;
    
     }

  async ngOnInit() {
    this.identity = await this.tokenService.GetUser();
    this.token = this.tokenService.GetPayload();
    this.getPublications(this.page, this.adding, this.city, this.searchQuery);
    
    if(this.identity != null) {
    // this.getAcceptedPetitions();
    // this.getPetitions();
    }
    this.permission = {
      _id: "",
      created_at: "",
      permited_at: "",
      user: "",
      publication: "",
      status: "pendent",
      viewed: false,
      publisher: "",
    }
  }
  getPublications(page, adding = false, city, searchQuery) {
    this.publicationService.getOfferBooks(page, this.city, this.searchQuery).subscribe(
      (res: any) => {
        console.log(res)
        this.total = res['total_items'];
        this.pages = res['pages'];
        this.itemsPerPage = res['items_per_page'];
        if (!adding) {
          this.offerBooks = res['publications'];
        } else {
          let arrayA = this.offerBooks;
          let arrayB = res['publications'];
          this.offerBooks = arrayA.concat(arrayB);
        }
        if (page > this.pages) {
        }
      },
      err => {
        console.log(err)
        if (err.status === 500) {
          this.error500 = err.status
        } else if (err.status === 401) {
          //this.userService.logOut();
        }
      }
    )
  }

  selectCity(event: Event) {
    this.city = (event.target as HTMLSelectElement).value;

    this.getPublications(this.page, this.adding, this.city, this.searchQuery)
  }

  serachPublications(event) {
    if (event.code === 'Enter') {
      this.searchQuery = event.target.value;
      
      this.getPublications(this.page, this.adding, this.city, this.searchQuery)
    }
  }

  search() {
    
    this.city=this.form.value.city;
    this.searchQuery=this.form.value.searchQuery;
    this.getPublications(this.page, this.adding, this.city, this.searchQuery)
    
  }

  clearSearch() {
    this.form.value.searchQuery = '';
    this.form.value.city = '';
    
    this.getPublications(this.page, this.adding, this.city, this.searchQuery)
  }




  noMore = false;
  viewMore() {
    if (this.offerBooks.length == this.total) {
      this.noMore = true;
    } else {
      this.page += 1;
    }
    this.getPublications(this.page, true, this.city, this.searchQuery);
  }
  refresh($event = null) {
    this.getPublications(this.page, this.adding, this.city, this.searchQuery);
    //this.getUnreedMessages(this.token);
  }
  // deletePublication(id) {
  //   const dialogRef = this.dialog.open(DeleteSellbook);

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       this.publicationService.deletePublication(this.token, id).subscribe(
  //         res => {
  //           this.refresh()
  //         },
  //         err => {
  //           console.log(err);
  //         }
  //       )
  //     }
  //   });

  // }
  
  // sendPetition(publication, publisher) {
  //   this.permission.user = this.identity._id;
  //   this.permission.publication = publication;
  //   this.permission.publisher = publisher;

  //   this.publicationService.sendPetition(this.permission).subscribe(
  //     res => {
  //       console.log(res)
  //     },
  //     err => {
  //       console.log(err)

  //     }
  //   );
  // }
  // getPetitions() {

  //   this.publicationService.getUserPetitions(this.identity._id).subscribe(
  //     res => {

  //       this.receivedpetitions = res['petitions']
  //     },
  //     err => {

  //     }
  //   )
  // }
  // getAcceptedPetitions() {
  //   this.publicationService.getUserAcceptedPetitions(this.identity._id).subscribe(
  //     res => {

  //       this.unseenPetitions = res['permissions']
  //     },
  //     err => {

  //     }
  //   )
  // }

}
// @Component({
//   selector: 'delete',
//   templateUrl: 'deletesellbook.component.html',
//   styleUrls: ['./sellbook.component.scss']
// })
// export class DeleteSellbook {

// }
