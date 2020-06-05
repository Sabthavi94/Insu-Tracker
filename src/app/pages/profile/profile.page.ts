import { Component, OnInit } from '@angular/core';
import {ToastController} from '@ionic/angular';
import {ClientService} from '../../api-services/api-data-services';
import {GetterSetter} from '../../core/classes';
import {UserService} from '../../api-services/common-services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  UserDetails:any = {};

  constructor(private clientService: ClientService,public toastController: ToastController, public gs: GetterSetter,private us:UserService
    ) {
    
   }

  ngOnInit() {
    this.getUserDetail();
  }

  getUserDetail(){
  const token = this.gs.authResponse.token;
  const req={token:token};
  this.clientService.getCustomerDetails(req.token).then((res: any) => {
    if (res) {
       this.us.setUser(res);
       this.UserDetails=this.gs.userResponse;
     } else {
      console.log(res);
      this.presentToast(res.error, 'error').then();
    }
  });
}

async presentToast(msg, type) {
  const toast = await this.toastController.create({
    message: msg,
    duration: 2000,
    position: 'top',
    color: type
  });
  toast.present();
}

}
