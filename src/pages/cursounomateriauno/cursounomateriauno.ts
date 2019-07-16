import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EjemplocursounomateriaunoPage } from '../ejemplocursounomateriauno/ejemplocursounomateriauno';

/**
 * Generated class for the CursounomateriaunoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cursounomateriauno',
  templateUrl: 'cursounomateriauno.html',
})
export class CursounomateriaunoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ejemplouno(){
    this.navCtrl.push(EjemplocursounomateriaunoPage);
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CursounomateriaunoPage');
  }

}
