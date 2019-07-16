import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { PrincipalPage } from '../pages/principal/principal';
import { OpcionesPage } from '../pages/opciones/opciones';
import { MateriaunoPage } from '../pages/materiauno/materiauno';
import { MateriadosPage } from '../pages/materiados/materiados';
import { MateriatresPage } from '../pages/materiatres/materiatres';
import { CursounomateriaunoPage } from '../pages/cursounomateriauno/cursounomateriauno';
import { CursounomateriadosPage } from '../pages/cursounomateriados/cursounomateriados';
import { CursounomateriatresPage } from '../pages/cursounomateriatres/cursounomateriatres';
import { CursodosmateriaunoPage } from '../pages/cursodosmateriauno/cursodosmateriauno';
import { CursodosmateriadosPage } from '../pages/cursodosmateriados/cursodosmateriados';
import { CursodosmateriatresPage } from '../pages/cursodosmateriatres/cursodosmateriatres';
import { CursotresmateriaunoPage } from '../pages/cursotresmateriauno/cursotresmateriauno';
import { CursotresmateriadosPage } from '../pages/cursotresmateriados/cursotresmateriados';
import { CursotresmateriatresPage } from '../pages/cursotresmateriatres/cursotresmateriatres';
import { EjemplocursounomateriaunoPage } from '../pages/ejemplocursounomateriauno/ejemplocursounomateriauno';
import { EjemplocursounomateriadosPage } from '../pages/ejemplocursounomateriados/ejemplocursounomateriados';
import { EjemplocursounomateriatresPage } from '../pages/ejemplocursounomateriatres/ejemplocursounomateriatres';
import { EjemplocursodosmateriaunoPage } from '../pages/ejemplocursodosmateriauno/ejemplocursodosmateriauno';
import { EjemplocursodosmateriadosPage } from '../pages/ejemplocursodosmateriados/ejemplocursodosmateriados';
import { EjemplocursodosmateriatresPage } from '../pages/ejemplocursodosmateriatres/ejemplocursodosmateriatres';
import { EjemplocursotresmateriaunoPage } from '../pages/ejemplocursotresmateriauno/ejemplocursotresmateriauno';
import { EjemplocursotresmateriadosPage } from '../pages/ejemplocursotresmateriados/ejemplocursotresmateriados';
import { EjemplocursotresmateriatresPage } from '../pages/ejemplocursotresmateriatres/ejemplocursotresmateriatres';

 

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    PrincipalPage,
    OpcionesPage,
    MateriaunoPage,
    MateriadosPage,
    MateriatresPage,
    CursounomateriaunoPage,
    CursounomateriadosPage,
    CursounomateriatresPage,
    CursodosmateriaunoPage,
    CursodosmateriadosPage,
    CursodosmateriatresPage,
    CursotresmateriaunoPage,
    CursotresmateriadosPage,
    CursotresmateriatresPage,
    EjemplocursounomateriaunoPage,
    EjemplocursounomateriadosPage,
    EjemplocursounomateriatresPage,
    EjemplocursodosmateriaunoPage,
    EjemplocursodosmateriadosPage,
    EjemplocursodosmateriatresPage,
    EjemplocursotresmateriaunoPage,
    EjemplocursotresmateriadosPage,
    EjemplocursotresmateriatresPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    PrincipalPage,
    OpcionesPage,
    MateriaunoPage,
    MateriadosPage,
    MateriatresPage,
    CursounomateriaunoPage,
    CursounomateriadosPage,
    CursounomateriatresPage,
    CursodosmateriaunoPage,
    CursodosmateriadosPage,
    CursodosmateriatresPage,
    CursotresmateriaunoPage,
    CursotresmateriadosPage,
    CursotresmateriatresPage,
    EjemplocursounomateriaunoPage,
    EjemplocursounomateriadosPage,
    EjemplocursounomateriatresPage,
    EjemplocursodosmateriaunoPage,
    EjemplocursodosmateriadosPage,
    EjemplocursodosmateriatresPage,
    EjemplocursotresmateriaunoPage,
    EjemplocursotresmateriadosPage,
    EjemplocursotresmateriatresPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
