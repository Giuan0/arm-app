import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { MovementsProvider } from '../../providers/movements/movements'


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  
  globalLink: string;
  constructor(public navCtrl: NavController,
  			  private movements: MovementsProvider) {
  	this.globalLink = this.movements.getGlobalLink();
  }

  setGlobalLink(){
  	this.movements.setGlobalLink(this.globalLink);
  }
}
