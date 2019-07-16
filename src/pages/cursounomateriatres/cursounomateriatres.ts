import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EjemplocursounomateriatresPage } from '../ejemplocursounomateriatres/ejemplocursounomateriatres';

/**
 * Generated class for the CursounomateriatresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cursounomateriatres',
  templateUrl: 'cursounomateriatres.html',
})
export class CursounomateriatresPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CursounomateriatresPage');
  }

  ejemplouno(){
    this.navCtrl.push(EjemplocursounomateriatresPage);
   }

}
