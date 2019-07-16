import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EjemplocursodosmateriatresPage } from '../ejemplocursodosmateriatres/ejemplocursodosmateriatres';

/**
 * Generated class for the CursodosmateriatresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cursodosmateriatres',
  templateUrl: 'cursodosmateriatres.html',
})
export class CursodosmateriatresPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CursodosmateriatresPage');
  }

  ejemplouno(){
    this.navCtrl.push(EjemplocursodosmateriatresPage);
   }

}
