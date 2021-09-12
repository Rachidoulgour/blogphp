import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Publication } from 'src/app/interfaces/Publication';
import { PublicationService } from 'src/app/services/publication.service';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: any;
  following: boolean;
  followed: boolean;
  status: string;
  identity: any;
  token: string;
  page: number;
  total: any;
  pages: any;
  publications: Publication[];
  unreed: number;
  user_id;
  error500;
  

  constructor(
    private userService: UserService,
    private tokenService: TokenService,
    private publicationService: PublicationService,
    private route: ActivatedRoute,
    private router: Router,
    //private messagesService: MessagesService,
    public dialog: MatDialog
  ) {
    //this.token = this.userService.getToken();
    this.page = 1;
  }

  async ngOnInit() {
    this.identity = await this.tokenService.GetUser();
    this.token = await this.tokenService.GetPayload();
    this.loadPage();
  }
  loadPage() {
    this.route.params.subscribe(params => {
      let id = this.identity._id
      this.user_id = id;
      this.getUser(id, this.token);
      this.getUserPublication(this.token, this.user_id, this.page)
    }

    )
    this.verifyIsLoged();
    //this.getUnreedMessages(this.token);
  }
  verifyIsLoged(){
    console.log("verifyIsLoged")
    this.tokenService.verifyExpirtion(this.token).subscribe(
      res=>{
        console.log(res)
        
      },
      err => {
        console.log(err)
        localStorage.removeItem('_ionicstorage/_ionickv/auth-token');
        this.tokenService.SetToken("")
        this.tokenService.logOut();
        //this.storage.remove('auth-user');
        //this.router.navigate(['/offlinetab/login'])
      }
    )
  }
  getUser(id, token) {
    this.userService.getUser(id, this.token).subscribe(
      res => {

        this.user = res;
      },
      err => {
        console.log(err);
        this.tokenService.logOut();
        //this.router.navigate(['/perfil', this.identity._id]);
        if (err.status === 401) {
        this.tokenService.logOut();
       // localStorage.removeItem('user');
        }
      }
    )
  }
  getUserPublication(token, user_id, page) {
    this.publicationService.getPublicationsUser(this.token, user_id, page).subscribe(
      (res: any) => {
        this.total = res.total_items;
        this.pages = res['pages'];
        this.publications = res.publications;
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

  // deleteUserAccount() {
  //   const dialogRef = this.dialog.open(DeleteAccount);
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       this.userService.deleteUser(this.identity).subscribe(
  //         res => {

  //           this.userService.logOut();

  //         },
  //         err => {
  //           console.log(err)
  //         }
  //       )
  //     }
  //   })
  // }
  // getUnreedMessages(token) {

  //   this.messagesService.getUnreedMessages(token).subscribe(
  //     res => {
  //       this.unreed = +res['unviewed'];
  //     },
  //     err => {
  //       console.log(err)
  //     }
  //   );
  // }
  refresh($event = null) {
    this.getUserPublication(this.token, this.user_id, this.page);
   // this.getUnreedMessages(this.token);
  }
  // deletePublication(id) {
  //   const dialogRef = this.dialog.open(DeletePubProfile);

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       this.publicationService.deletePublication(this.token, id).subscribe(
  //         res => {
  //           this.refresh()
  //         },
  //         err => {
  //           console.log(err);
  //           if (err.status === 500) {
  //             this.error500 = err.status
  //           } else if (err.status === 401) {
  //             this.userService.logOut();
  //           }
  //         }
  //       )
  //     }
  //   });

  // }

}
// @Component({
//   selector: 'deletepubprofile',
//   templateUrl: 'deletepubprofile.component.html',
//   styleUrls: ['./profile.component.scss']
// })
// export class DeletePubProfile {

// }

// @Component({
//   selector: 'deleteaccount',
//   templateUrl: 'deleteaccount.component.html',
//   styleUrls: ['./profile.component.scss']
// })
// export class DeleteAccount {

// }
