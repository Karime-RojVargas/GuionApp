import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CursodosmateriaunoPage } from '../cursodosmateriauno/cursodosmateriauno';
import { CursodosmateriadosPage } from '../cursodosmateriados/cursodosmateriados';
import { CursodosmateriatresPage } from '../cursodosmateriatres/cursodosmateriatres';

/**
 * Generated class for the MateriadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-materiados',
  templateUrl: 'materiados.html',
})
export class MateriadosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  cursouno(){
    this.navCtrl.push(CursodosmateriaunoPage);
   }
   cursodos(){
    this.navCtrl.push(CursodosmateriadosPage);
   }
   cursotres(){
    this.navCtrl.push(CursodosmateriatresPage);
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MateriadosPage');
  }

}
