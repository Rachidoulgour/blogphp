import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellbookPage } from './sellbook.page';

const routes: Routes = [
  {
    path: '',
    component: SellbookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellbookPageRoutingModule {}
