import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Favorit } from 'src/app/interfaces/Favorit';
import { Permission } from 'src/app/interfaces/Permission';
import { Publication } from 'src/app/interfaces/Publication';
import { PublicationService } from 'src/app/services/publication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.page.html',
  styleUrls: ['./publication.page.scss'],
})
export class PublicationPage implements OnInit {

  public identity;
  public token;
  public url: string;
  public status: string;
  public page;
  public total;
  public pages;
  public itemsPerPage;
  public publications: Publication[];
  public favorit: Favorit;
  permission: Permission;
  isFavorit: any;
  isPermited;
  id;
  user_id;
  publication_id;
  error500;
  error404;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private publicationService: PublicationService,
    public dialog: MatDialog
  ) {
    //this.identity = this.userService.getIdentity();
    this.page = 1;
    this.favorit = {
      _id: "",
      created_at: "",
      user: "",
      publication: ""
    };
    this.permission = {
      _id: "",
      created_at: "",
      permited_at: "",
      user: "",
      publication: "",
      status: "pendent",
      viewed: false,
      publisher: "",
    };
  }

  ngOnInit() {
    this.loadPage();
    if(this.identity != null){
    this.getFavoritByPubAndUser();
    this.getPermissionByPubAndUser();
    }
  }
  loadPage() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getPublicationById(this.id)
    }

    )

  }

  getPublicationById(id) {

    this.publicationService.getPublicationById(this.id).subscribe(
      (res: any) => {
        this.publications = res['publication'];

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
  refresh($event = null) {
    this.getPublicationById(this.id);

  }

  deletePublication(id) {

    this.publicationService.deletePublication(this.token, id).subscribe(
      res => {

        this.refresh()
      },
      err => {
        console.log(err);
      }
    )

  }



  addToFavorits() {

    this.favorit.user = this.identity._id;
    this.favorit.publication = this.publications['_id'];
    this.publicationService.addToFavorits(this.token, this.favorit).subscribe(
      res => {

        this.getFavoritByPubAndUser();

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

  getFavoritByPubAndUser() {

    this.user_id = this.identity._id;
    this.publication_id = this.id;
    this.publicationService.getFavoritByPubAndUser(this.token, this.user_id, this.publication_id).subscribe(
      res => {

        this.isFavorit = res['favorits'];

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

  sendPetition(publication, publisher) {
    this.permission.user = this.identity._id;
    this.permission.publication = publication;
    this.permission.publisher = publisher;

    this.publicationService.sendPetition(this.permission).subscribe(
      res => {

        this.getPermissionByPubAndUser()
      },
      err => {
        console.log(err)

      }
    );
  }

  getPermissionByPubAndUser() {

    this.user_id = this.identity._id;
    this.publication_id = this.id;
    this.publicationService.getPermissionByPubAndUser(this.token, this.user_id, this.publication_id).subscribe(
      res => {

        this.isPermited = res['permission'];

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
  // openDialog() {
  //   this.dialog.open(Contact, {
  //     data: {
  //       publications: this.publications
  //     }
  //   });
  // }
}

// @Component({
//   selector: 'contact',
//   templateUrl: 'contact.component.html',
//   styleUrls: ['./publication.component.scss']
// })
// export class Contact {

//   constructor(@Inject(MAT_DIALOG_DATA) public data: Publication) { }
// }
