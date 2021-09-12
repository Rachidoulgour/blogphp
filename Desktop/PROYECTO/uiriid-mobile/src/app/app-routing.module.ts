import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserguardService } from './services/userguard.service';
import { IslogedService } from './services/isloged.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tab/home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'publish',
    loadChildren: () => import('./pages/publish/publish.module').then( m => m.PublishPageModule),
    canActivate: [IslogedService]
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [IslogedService]
  },
  {
    path: 'exchangebook',
    loadChildren: () => import('./pages/exchangebook/exchangebook.module').then( m => m.ExchangebookPageModule)
  },
  {
    path: 'demandbook',
    loadChildren: () => import('./pages/demandbook/demandbook.module').then( m => m.DemandbookPageModule)
  },
  {
    path: 'donationbook',
    loadChildren: () => import('./pages/donationbook/donationbook.module').then( m => m.DonationbookPageModule)
  },
  {
    path: 'favorit',
    loadChildren: () => import('./pages/favorit/favorit.module').then( m => m.FavoritPageModule),
    canActivate: [IslogedService]
  },
  {
    path: 'terms',
    loadChildren: () => import('./pages/terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'permissions',
    loadChildren: () => import('./pages/permissions/permissions.module').then( m => m.PermissionsPageModule),
    canActivate: [IslogedService]
  },
  {
    path: 'politics',
    loadChildren: () => import('./pages/politics/politics.module').then( m => m.PoliticsPageModule)
  },
  {
    path: 'sellbook',
    loadChildren: () => import('./pages/sellbook/sellbook.module').then( m => m.SellbookPageModule)
  },
  {
    path: 'publication/:id',
    loadChildren: () => import('./pages/publication/publication.module').then( m => m.PublicationPageModule)
  },
  {
    path: 'tab',
    loadChildren: () => import('./components/tab/tab.module').then( m => m.TabPageModule)
  },
  {
    path: 'editbook',
    loadChildren: () => import('./pages/editbook/editbook.module').then( m => m.EditbookPageModule),
    canActivate: [IslogedService]
  },
  {
    path: 'editprofile',
    loadChildren: () => import('./pages/editprofile/editprofile.module').then( m => m.EditprofilePageModule),
    canActivate: [IslogedService]
  },
  {
    path: 'homeoffline',
    loadChildren: () => import('./pages/homeoffline/homeoffline.module').then( m => m.HomeofflinePageModule)
  },
  {
    path: 'offlinetab',
    loadChildren: () => import('./components/offlinetab/offlinetab.module').then( m => m.OfflinetabPageModule)
  },
  {
    path: 'editpublication',
    loadChildren: () => import('./pages/editpublication/editpublication.module').then( m => m.EditpublicationPageModule),
    canActivate: [IslogedService]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
