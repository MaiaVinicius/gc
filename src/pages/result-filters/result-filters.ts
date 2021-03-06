import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResultFiltersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-result-filters',
  templateUrl: 'result-filters.html',
})
export class ResultFiltersPage {
  distance = 25;
  maxPrice = 400;
  orderBy = "minorDistance";
  gender = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultFiltersPage');
  }

}
