import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabPageRoutingModule } from './tab-routing.module';

import { TabPage } from './tab.page';
import { Routes, RouterModule } from '@angular/router';
import { UserguardService } from 'src/app/services/userguard.service';
import { IslogedService } from 'src/app/services/isloged.service';

const routes: Routes = [
  {
   path: '',
    component: TabPage,
    children: [
      {
        path: 'home',
            loadChildren: () => import('../../pages/home/home.module').then( m => m.HomePageModule)
            
      },
      {
        path: 'publish',
            loadChildren: () => import('../../pages/publish/publish.module').then( m => m.PublishPageModule),
            canActivate: [IslogedService]
      },
      {
        path: 'profile',
            loadChildren: () => import('../../pages/profile/profile.module').then( m => m.ProfilePageModule),
            canActivate: [IslogedService]
      },
      
    ]
  },
  {
        path: 'tab',
        redirectTo: '/tab/home',
        pathMatch: 'full'
      }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabPage]
})
export class TabPageModule {}
