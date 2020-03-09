import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PhotoFormComponent } from './components/photo-form/photo-form.component';
import { PhotoPreviewComponent } from './components/photo-preview/photo-preview.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ProfilComponent } from './components/profil/profil.component';

import { AuthenticGuard } from './authentic.guard';
import {TokenService} from './services/token.service';
import { UsersComponent } from './components/users/users.component'


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PhotoFormComponent,
    PhotoPreviewComponent,
    PhotoListComponent,
    SignupComponent,
    LoginComponent,
    ProfilComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthenticGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
