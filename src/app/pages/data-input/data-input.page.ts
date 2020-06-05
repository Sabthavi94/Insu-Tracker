import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import {Router} from '@angular/router';
import {ClientService} from '../../api-services/api-data-services';
import {AuthService} from '../../api-services/common-services';
import {GetterSetter} from '../../core/classes';
import {UserService} from '../../api-services/common-services'; 

@Component({
  selector: 'app-data-input',
  templateUrl: './data-input.page.html',
  styleUrls: ['./data-input.page.scss'],
})
export class DataInputPage implements OnInit {
 TripDetails:any = [];
 TripDataSet:any=[];
 trip:boolean=false;
 public DrivingDataForm: FormGroup;
 public TripId: any;
 
  constructor(private formBuilder: FormBuilder, public toastController: ToastController,private router: Router,
    private clientService: ClientService,  private auth: AuthService,  public gs: GetterSetter,private us:UserService ) {
   
      this.gettripId();
      this.initDataForm();
  }

  ngOnInit() {
    this.gettripId();
    this.initDataForm();
   
    
  }
  myDate: String = new Date().toISOString();

  initDataForm() {
    this.DrivingDataForm = this.formBuilder.group({
      location: ['', [Validators.required]],
      latitude: ['', [Validators.required]],
      longitude: ['', [Validators.required]],
      speed: ['', [Validators.required]],
      time: ['', [Validators.required]],
    });
  }

  gettripId(){
  const token = this.gs.authResponse.token;
  const req={token:token};
  this.clientService.getTripId(req.token).then((res: any) => {
    if (res) {
      console.log(res);
      this.TripId=res; 
     } else {
      
      this.presentToast(res.error, 'error').then();
    }
  });
  }
  addData(){
    this.trip=true;
    let date = new Date().toISOString().slice(0,10);
    const drivingdata = {date:date, location:this.DrivingDataForm.value.location ,latitude: this.DrivingDataForm.value.latitude
      , longitude: this.DrivingDataForm.value.longitude, speed: this.DrivingDataForm.value.speed
      , time: this.DrivingDataForm.value.time};
    this.TripDataSet.push(drivingdata);
    console.log(this.TripDataSet);
    this.presentToast('Driving data successfully added', 'success');
    this.DrivingDataForm.reset();
    
         
  }
 
  submitData() {
    this.TripDetails = [];
    this.trip=true;
    
    let date = new Date().toISOString().slice(0,10);
    const token = this.gs.authResponse.token;
    const req={token:token}; 
    

      this.clientService.addTripData(this.TripDataSet,req.token).then((res: any) => {
        if (res.token) {
          console.log(res);
          this.auth.setAuthResponse(res);
          
         // this.presentToast('Driving data successfully submitted', 'success');
           this.router.navigate(['dashboard']).then();
         
       
          
        } else {
          console.log(res);
          this.presentToast(res.error, 'error').then();
        }
      });
      this.TripDataSet=[];
      // this.TripId=0;
    
    this.router.navigate(['dashboard']).then();
      
    this.presentToast('Driving data successfully submitted', 'success');
      // this.clientService.getTripDetails(req.token,this.TripId).then((res: any) => {
      //   if (res) {
      //      this.TripDetails= res.driving_location;
      //      this.TripDetails = Array.of(this.TripDetails); 
      //      console.log('viewtrip',this.TripDetails[0])
      //      for(let trip of this.TripDetails){
            
      //      }
           
      //    }
      // });


   
      
      
  // }
 
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
 
  


