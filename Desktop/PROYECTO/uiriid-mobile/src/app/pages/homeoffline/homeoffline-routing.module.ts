import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeofflinePage } from './homeoffline.page';

const routes: Routes = [
  {
    path: '',
    component: HomeofflinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeofflinePageRoutingModule {}
