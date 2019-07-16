import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EjemplocursotresmateriatresPage } from '../ejemplocursotresmateriatres/ejemplocursotresmateriatres';

/**
 * Generated class for the CursotresmateriatresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cursotresmateriatres',
  templateUrl: 'cursotresmateriatres.html',
})
export class CursotresmateriatresPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CursotresmateriatresPage');
  }

  ejemplouno(){
    this.navCtrl.push(EjemplocursotresmateriatresPage);
   }

}
