import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandbookPage } from './demandbook.page';

const routes: Routes = [
  {
    path: '',
    component: DemandbookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandbookPageRoutingModule {}
