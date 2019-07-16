import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EjemplocursounomateriadosPage } from '../ejemplocursounomateriados/ejemplocursounomateriados';

/**
 * Generated class for the CursounomateriadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cursounomateriados',
  templateUrl: 'cursounomateriados.html',
})
export class CursounomateriadosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CursounomateriadosPage');
  }

  ejemplouno(){
    this.navCtrl.push(EjemplocursounomateriadosPage);
   }

}
