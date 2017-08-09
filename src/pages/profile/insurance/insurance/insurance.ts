import {Component} from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import {InsuranceAddPage} from "../insurance-add/insurance-add";

/**
 * Generated class for the InsurancePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-insurance',
  templateUrl: 'insurance.html',
})
export class InsurancePage {

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InsurancePage');
  }

  addInsurance() {
    let modal = this.modalCtrl.create(InsuranceAddPage);
    modal.present();
  }
}
