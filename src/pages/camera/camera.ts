import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Camera } from 'ionic-native';
import { RecognitoProvider } from '../../providers/recognito/recognito';
/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {
  person: any = "";
  reboot: boolean = true;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public recognitoProvider:RecognitoProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

  takePicture(){
    this.reboot = false;
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
      this.recognitoProvider.getPerson("data:image/jpeg;base64," + imageData)
      .then(res=>{
          this.reboot = true;
          this.person = res.label;
        })
    }, (err) => {
        console.log(err);
    });
  }

}
