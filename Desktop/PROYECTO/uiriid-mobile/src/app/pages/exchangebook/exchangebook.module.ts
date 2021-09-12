import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExchangebookPageRoutingModule } from './exchangebook-routing.module';

import { ExchangebookPage } from './exchangebook.page';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MaterialModule,
    ExchangebookPageRoutingModule
  ],
  declarations: [ExchangebookPage]
})
export class ExchangebookPageModule {}
