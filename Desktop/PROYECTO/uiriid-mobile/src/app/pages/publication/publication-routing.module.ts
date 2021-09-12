import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicationPage } from './publication.page';

const routes: Routes = [
  {
    path: '',
    component: PublicationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicationPageRoutingModule {}
