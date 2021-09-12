import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { TokenService } from 'src/app/services/token.service';
import { UploadService } from 'src/app/services/upload.service';
import { UserService } from 'src/app/services/user.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {
  title: string;
  user: User;
  identity;
  token;
  status: string;
  private URL = 'http://localhost:3000/api';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private uploadService: UploadService,
    private tokenService: TokenService,
    private storage: Storage,
  ) {
    //this.user = <User><unknown>userService.getIdentity();
    // this.identity = this.user;
    // this.token = userService.getToken();
    this.storage.create();
    
    
  }

  async ngOnInit() {
    this.user = await this.tokenService.GetUser();
    this.identity = this.user;
    this.token = await this.tokenService.GetPayload();
  }
  userEdit() {
    this.userService.updateUser(this.user, this.token).subscribe(
      res => {
        if (!res) {
          this.status = 'error';

        } else {
          this.status = 'success';
          localStorage.setItem('user', JSON.stringify(this.user));
          this.identity = this.user;
          this.uploadService.makeFileRequest(this.URL + '/update-avatar/' + this.user._id, [], this.filesToUpload, this.token, 'avatar')
            .then((result: any) => {
              this.user.avatar = result.user.avatar;
              //localStorage.setItem('identity', JSON.stringify(this.user));
              //this.router.navigate(['/perfil']);
            })

        }

      },
      err => {
        const messageError = err;
        console.log(messageError);
        if (messageError != null) {
          this.status = 'error'
        }
      }
    )
  }
  filesToUpload: Array<File>;
  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
