import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  form: FormGroup;
  matcher = new MyErrorStateMatcher();
  constructor(private authService: AuthService, private tokenService: TokenService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(null, 
        Validators.compose([Validators.minLength(8), Validators.maxLength(20)],
      )),
      email: new FormControl(null, 
        [
          Validators.email,
          Validators.required
        ]
      ),
      password: new FormControl(null,
        Validators.compose([ 
          Validators.required,
          Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)
        ]
        
      )),
      confirmPassword: new FormControl(null, 
         
         Validators.required
          
        
      ),
      conditions: new FormControl(false, 
        
          Validators.required
        
      )
    }, { validators: this.checkPasswords })
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }


  signUp() {
    
    if (this.form.status === "VALID") {
      this.authService.signUp(this.form.value).subscribe(
        res => {
          if(res['user']) {
            this.router.navigate(['/login'])
          }
          // this.tokenService.SetToken(res['token']);
          // localStorage.setItem('token', res['token']);
          // localStorage.setItem('userId', JSON.stringify(res['user_id']))
          // this.router.navigate(['/validate'])
          // this.message = "success"
        },
        err => {
          console.log(err)
        }
      )
    }
  }


}
