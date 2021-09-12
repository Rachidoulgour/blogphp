import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditpublicationPageRoutingModule } from './editpublication-routing.module';

import { EditpublicationPage } from './editpublication.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditpublicationPageRoutingModule
  ],
  declarations: [EditpublicationPage]
})
export class EditpublicationPageModule {}
