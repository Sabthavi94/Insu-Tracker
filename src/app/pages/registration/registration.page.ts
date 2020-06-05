import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClientService} from './../../api-services/api-data-services';
import {AuthService} from '../../api-services/common-services';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  customerDetailsForm: FormGroup;

  constructor(public toastController: ToastController, private router: Router, private formBuilder: FormBuilder,
              private clientService: ClientService,  private auth: AuthService) { }

  ngOnInit() {
    this.initSearchForm();
  }

  initSearchForm() {
    this.customerDetailsForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required]],
      policy: ["", [Validators.required]],
      password: ["", [Validators.required]],
      password_confirmation: ["", [Validators.required]]
    });
  }

  signUp() {
    // this.presentToast('Registered Successfully');
    // this.signupSubmitted = true;
     if (this.customerDetailsForm.valid) {
      const regDetails = {name: this.customerDetailsForm.value.name, email: this.customerDetailsForm.value.email,
        password: this.customerDetailsForm.value.password , password_confirmation: this.customerDetailsForm.value.password_confirmation,
        policy_no: this.customerDetailsForm.value.policy
      };
          
        this.clientService.createCustomer(regDetails).then((res: any) => {
        if (res.token) {
          this.auth.setAuthResponse(res);
          this.presentToast('You\'re successfully registered with Insu Tracker!').then();
          this.router.navigate(['myhome']).then();
        } else {
          this.presentToast('Registration failed.Try again later').then();
        }
      });
    }
   
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
