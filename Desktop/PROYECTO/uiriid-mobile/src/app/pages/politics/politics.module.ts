import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoliticsPageRoutingModule } from './politics-routing.module';

import { PoliticsPage } from './politics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoliticsPageRoutingModule
  ],
  declarations: [PoliticsPage]
})
export class PoliticsPageModule {}
