import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EjemplocursodosmateriadosPage } from '../ejemplocursodosmateriados/ejemplocursodosmateriados';

/**
 * Generated class for the CursodosmateriadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cursodosmateriados',
  templateUrl: 'cursodosmateriados.html',
})
export class CursodosmateriadosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CursodosmateriadosPage');
  }

  ejemplouno(){
    this.navCtrl.push(EjemplocursodosmateriadosPage);
   }

}
