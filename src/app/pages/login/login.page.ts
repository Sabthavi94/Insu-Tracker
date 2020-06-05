import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastController} from '@ionic/angular';
import {ClientService} from '../../api-services/api-data-services';
import {AuthService} from '../../api-services/common-services';
import {GetterSetter} from '../../core/classes';
import {UserService} from '../../api-services/common-services';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  customerDetailsForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, public toastController: ToastController,
              private clientService: ClientService,  private auth: AuthService,  public gs: GetterSetter,private us:UserService
               ) { }

  ngOnInit() {
    this.initSearchForm();
  }

  initSearchForm() {
    this.customerDetailsForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    if (this.customerDetailsForm.valid) {
      const regDetails = {email: this.customerDetailsForm.value.email, password: this.customerDetailsForm.value.password};
      this.clientService.login(regDetails).then((res: any) => {
        if (res.token) {
          console.log(res);
          this.auth.setAuthResponse(res);
          this.presentToast('login successful.!', 'success').then();
          const token = this.gs.authResponse.token;
          const req={token:token};
          this.clientService.getCustomerDetails(req.token).then((res: any) => {
            if (res) {
               this.us.setUser(res);
               
             }
          });
          this.router.navigate(['dashboard']).then();
        } else {
          console.log(res);
          this.presentToast(res.error, 'error').then();
        }
      });
      
  }
 
  // this.router.navigate(['data-input'])
 

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
