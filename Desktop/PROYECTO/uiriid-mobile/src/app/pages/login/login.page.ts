import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { Storage } from '@ionic/storage';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  error404;
  error501;
  user = {
    email: "",
    password: ""
  }
  constructor(private authService: AuthService, 
    private tokenService: TokenService, 
    private storage: Storage,
    public navCtrl: NavController,
    private router: Router) { }

  async ngOnInit() {
    await this.storage.create();
  }

  logIn() {
    this.authService.logIn(this.user).subscribe(
      res => {
        this.tokenService.SetToken(res.token)
        this.tokenService.SetUser(JSON.stringify(res.user))
        this.router.navigate(['tab/home'])
        // localStorage.setItem('token', res.token);
        // localStorage.setItem('user', JSON.stringify(res.user));
        
  
      },
      err => {
        console.log(err)
        if (err.status === 404) {
          this.error404 = err.status
        } else if (err.status === 501) {
          this.error501 = err.status
        }
      }
    )
    

    // this.authService.logIn(this.user).subscribe(
    //   res => {

    //     localStorage.setItem('token', res.token);
    //     localStorage.setItem('user', JSON.stringify(res.user));
    //     if (res.user.tanbatt == "ANBBAT_AMKRAN") {
    //       this.router.navigate(['/admin-panel'])
    //     } else {
    //       this.router.navigate(['/inicio'])
    //     }

    //   },
    //   err => {
    //     console.log(err)
    //     if (err.status === 404) {
    //       this.error404 = err.status
    //     } else if (err.status === 501) {
    //       this.error501 = err.status
    //     }
    //   }
    // )
  }

}
