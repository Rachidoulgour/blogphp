import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditbookPage } from './editbook.page';

const routes: Routes = [
  {
    path: '',
    component: EditbookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditbookPageRoutingModule {}
