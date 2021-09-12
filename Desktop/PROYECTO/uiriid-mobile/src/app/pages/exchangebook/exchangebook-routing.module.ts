import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExchangebookPage } from './exchangebook.page';

const routes: Routes = [
  {
    path: '',
    component: ExchangebookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExchangebookPageRoutingModule {}
