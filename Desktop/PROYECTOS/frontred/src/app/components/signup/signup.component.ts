import { Component, OnInit } from '@angular/core';
import { UserService} from '../../services/user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user={}
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }
  signUp(){
    this.userService.signUp(this.user).subscribe(
      res => {
        localStorage.setItem('token', res['token']);
        this.router.navigate(['/profil'])
      },
      err =>{
        console.log(err)
      }
    )
  }

}
