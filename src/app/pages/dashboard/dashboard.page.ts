import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {ClientService} from '../../api-services/api-data-services';
import {GetterSetter} from '../../core/classes';
import {UserService} from '../../api-services/common-services';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

 
  
 Result:any = {};

  constructor(private clientService: ClientService,public toastController: ToastController, public gs: GetterSetter,private us:UserService
   ,private router: Router ) {
    this.getResults();
   }

   
  ngOnInit() {
    this.getResults();
    console.log( 'name',this.gs.authResponse)
  }

  ionViewDidEnter() {
    this.getResults();
  }
  
  refreshData(){
    this.router.navigate(['data-input'])
  }


  getResults(){
 
  const token = this.gs.authResponse.token;
  const req={token:token};
 
  this.clientService.getresults(req.token).then((res: any) => {
    if (res) {
      // console.log(this.gs.userResponse.name,'name')
       this.us.setresult(res);
       this.Result=res;
       console.log(this.Result)
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

