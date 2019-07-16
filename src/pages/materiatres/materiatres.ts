import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CursotresmateriaunoPage } from '../cursotresmateriauno/cursotresmateriauno';
import { CursotresmateriadosPage } from '../cursotresmateriados/cursotresmateriados';
import { CursotresmateriatresPage } from '../cursotresmateriatres/cursotresmateriatres';

/**
 * Generated class for the MateriatresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-materiatres',
  templateUrl: 'materiatres.html',
})
export class MateriatresPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  cursouno(){
    this.navCtrl.push(CursotresmateriaunoPage);
   }
   cursodos(){
    this.navCtrl.push(CursotresmateriadosPage);
   }
   cursotres(){
    this.navCtrl.push(CursotresmateriatresPage);
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MateriatresPage');
  }

}
