import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EjemplocursotresmateriaunoPage } from '../ejemplocursotresmateriauno/ejemplocursotresmateriauno';

/**
 * Generated class for the CursotresmateriaunoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cursotresmateriauno',
  templateUrl: 'cursotresmateriauno.html',
})
export class CursotresmateriaunoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CursotresmateriaunoPage');
  }
  ejemplouno(){
    this.navCtrl.push(EjemplocursotresmateriaunoPage);
   }

}
