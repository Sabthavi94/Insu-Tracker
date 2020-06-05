import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import {Router} from '@angular/router';
import {GetterSetter} from '../../core/classes';

@Component({
  selector: 'app-myhome',
  templateUrl: './myhome.page.html',
  styleUrls: ['./myhome.page.scss'],
})
export class MyhomePage implements OnInit {

  constructor(public toastController: ToastController, private router: Router,public gs: GetterSetter) { }

  ngOnInit() {
    console.log(this.gs.authResponse);
  }

  connect() {
    this.router.navigate(['dashboard']).then();
    this.presentToast('Connceted Successfully');
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'top',
      color: 'success'
    });
    toast.present();
  }

}
