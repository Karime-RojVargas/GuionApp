import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MateriaunoPage } from '../materiauno/materiauno';
import { MateriadosPage } from '../materiados/materiados';
import { MateriatresPage } from '../materiatres/materiatres';

/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  materiauno(){
    this.navCtrl.push(MateriaunoPage);
   }
   materiados(){
    this.navCtrl.push(MateriadosPage);
   }
   materiatres(){
    this.navCtrl.push(MateriatresPage);
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

}
