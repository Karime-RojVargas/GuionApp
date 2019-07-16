import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CursounomateriaunoPage } from '../cursounomateriauno/cursounomateriauno';
import { CursounomateriadosPage } from '../cursounomateriados/cursounomateriados';
import { CursounomateriatresPage } from '../cursounomateriatres/cursounomateriatres';

/**
 * Generated class for the MateriaunoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-materiauno',
  templateUrl: 'materiauno.html',
})
export class MateriaunoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  cursouno(){
    this.navCtrl.push(CursounomateriaunoPage);
   }
   cursodos(){
    this.navCtrl.push(CursounomateriadosPage);
   }
   cursotres(){
    this.navCtrl.push(CursounomateriatresPage);
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MateriaunoPage');
  }

}
