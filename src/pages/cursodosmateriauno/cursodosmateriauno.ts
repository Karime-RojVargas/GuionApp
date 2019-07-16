import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EjemplocursodosmateriaunoPage } from '../ejemplocursodosmateriauno/ejemplocursodosmateriauno';

/**
 * Generated class for the CursodosmateriaunoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cursodosmateriauno',
  templateUrl: 'cursodosmateriauno.html',
})
export class CursodosmateriaunoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CursodosmateriaunoPage');
  }
  ejemplouno(){
    this.navCtrl.push(EjemplocursodosmateriaunoPage);
   }

}
