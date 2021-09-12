import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandbookPageRoutingModule } from './demandbook-routing.module';

import { DemandbookPage } from './demandbook.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandbookPageRoutingModule
  ],
  declarations: [DemandbookPage]
})
export class DemandbookPageModule {}
