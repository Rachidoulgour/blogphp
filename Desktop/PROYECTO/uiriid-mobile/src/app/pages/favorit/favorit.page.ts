import { Component, OnInit } from '@angular/core';
import { Favorit } from 'src/app/interfaces/Favorit';
import { PublicationService } from 'src/app/services/publication.service';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-favorit',
  templateUrl: './favorit.page.html',
  styleUrls: ['./favorit.page.scss'],
})
export class FavoritPage implements OnInit {
  identity;
  token;
  user_id;
  page;
  pages;
  total;
  error500: any;
  favorits: Favorit[];
  constructor(private publicationService: PublicationService,
    private tokenService: TokenService,
    private storage: Storage,
    private userService: UserService) {
      // this.identity = this.userService.getIdentity();
      // this.token = this.userService.getToken();
      this.page = 1;
     }

    async ngOnInit(){
      await this.storage.create();
      this.identity = await this.tokenService.GetUser();
      this.token = await this.tokenService.GetPayload();
    
      this.user_id = this.identity._id;
      this.getUserFavorits(this.token, this.user_id, this.page);
    }
  
    getUserFavorits(token, user_id, page) {
      this.publicationService.getFavoritsUser(token, user_id, page).subscribe(
        (res: any) => {
          this.total = res.total_items;
          this.pages = res['pages'];
          this.favorits = res.favorits;
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

}
