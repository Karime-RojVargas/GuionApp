import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EjemplocursotresmateriadosPage } from '../ejemplocursotresmateriados/ejemplocursotresmateriados';

/**
 * Generated class for the CursotresmateriadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cursotresmateriados',
  templateUrl: 'cursotresmateriados.html',
})
export class CursotresmateriadosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CursotresmateriadosPage');
  }
  ejemplouno(){
    this.navCtrl.push(EjemplocursotresmateriadosPage);
   }

}
