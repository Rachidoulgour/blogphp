import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonationbookPage } from './donationbook.page';

const routes: Routes = [
  {
    path: '',
    component: DonationbookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonationbookPageRoutingModule {}
