import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfflinetabPage } from './offlinetab.page';

const routes: Routes = [
  {
    path: '',
    component: OfflinetabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfflinetabPageRoutingModule {}
