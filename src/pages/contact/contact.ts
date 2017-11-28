import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { MovementsProvider } from '../../providers/movements/movements';
import { RecognitoProvider } from '../../providers/recognito/recognito';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  
  globalLink: string;
  constructor(public navCtrl: NavController,
          private movements: MovementsProvider,
          private recognito: RecognitoProvider) {
  	this.globalLink = this.movements.getGlobalLink();
  }

  setGlobalLink(){
    this.movements.setGlobalLink(this.globalLink);
    this.recognito.setGlobalLink(this.globalLink);
  }
}
