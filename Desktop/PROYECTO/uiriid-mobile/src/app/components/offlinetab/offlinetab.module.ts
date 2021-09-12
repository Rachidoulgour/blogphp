import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfflinetabPageRoutingModule } from './offlinetab-routing.module';

import { OfflinetabPage } from './offlinetab.page';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
   path: '',
    component: OfflinetabPage,
    children: [
      {
        path: 'homeoffline',
            loadChildren: () => import('../../pages/homeoffline/homeoffline.module').then( m => m.HomeofflinePageModule)
      },
      {
        path: 'login',
            loadChildren: () => import('../../pages/login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: 'signup',
            loadChildren: () => import('../../pages/signup/signup.module').then( m => m.SignupPageModule)
      },
      
    ]
  },
  {
        path: 'offlinetab',
        redirectTo: '/offlinetab/login',
        pathMatch: 'full'
      }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfflinetabPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OfflinetabPage]
})
export class OfflinetabPageModule {}
