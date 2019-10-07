import { Component } from 'angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.css'],
})
exportclass HomePage {

  constructior(
    public alertController: AlertController
  )  { }

  async showAlert() {
    const alert = await this.HTMLIonAlertControllerElement.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons. ['OK']
    });

    await alert.present();
  }
}
