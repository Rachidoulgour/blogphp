import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellbookPageRoutingModule } from './sellbook-routing.module';

import { SellbookPage } from './sellbook.page';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SellbookPageRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [SellbookPage]
})
export class SellbookPageModule {}
