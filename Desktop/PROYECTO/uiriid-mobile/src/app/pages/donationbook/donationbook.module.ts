import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonationbookPageRoutingModule } from './donationbook-routing.module';

import { DonationbookPage } from './donationbook.page';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    DonationbookPageRoutingModule
  ],
  declarations: [DonationbookPage]
})
export class DonationbookPageModule {}
