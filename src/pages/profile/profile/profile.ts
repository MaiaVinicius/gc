import {Component} from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import {StepEmailPage} from "../profile-wizard/personal/step-email/step-email";
import {FavoriteDoctorsPage} from "../favorite-doctors/favorite-doctors";
import {MedicalRecordPage} from "../medical-record/medical-record/medical-record";
import {DependentPage} from "../dependent/dependent/dependent";
import {InsurancePage} from "../insurance/insurance/insurance";
import {MedicationReminderPage} from "../../medication-reminder/medication-reminder/medication-reminder";
import {FullProfilePage} from "../full-profile/full-profile/full-profile";
// import {FullProfilePage} from "../full-profile/full-profile";

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }


  goToFullProfile() {
    this.navCtrl.push(FullProfilePage);
  }

  goToWizardProfile() {
    this.navCtrl.push(StepEmailPage);
  }

  goToFavoriteDoctors() {
    this.navCtrl.push(FavoriteDoctorsPage);
  }

  goToMedicalRecord() {
    this.navCtrl.push(MedicalRecordPage);
  }

  goToDependents() {
    this.navCtrl.push(DependentPage);
  }

  goToInsurances() {
    this.navCtrl.push(InsurancePage);
  }

  goToMedicationReminder() {
    this.navCtrl.push(MedicationReminderPage);
  }
}
