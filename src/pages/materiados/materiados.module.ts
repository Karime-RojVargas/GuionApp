import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MateriadosPage } from './materiados';

@NgModule({
  declarations: [
    MateriadosPage,
  ],
  imports: [
    IonicPageModule.forChild(MateriadosPage),
  ],
})
export class MateriadosPageModule {}
