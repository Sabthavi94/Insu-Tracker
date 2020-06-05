import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ClientService} from '../../api-services/api-data-services';
import {AuthService} from '../../api-services/common-services';
import {GetterSetter} from '../../core/classes';
import {UserService} from '../../api-services/common-services'; 
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-mytrips',
  templateUrl: './mytrips.page.html',
  styleUrls: ['./mytrips.page.scss'],
})
export class MytripsPage implements OnInit {

  TripDetails:any = [];
 Trips:any=[];

  constructor(private router: Router,public toastController: ToastController,
    private clientService: ClientService,  private auth: AuthService,  public gs: GetterSetter,private us:UserService) { }

  ngOnInit() {
    this.getTrips();
  }
  myDate: String = new Date().toISOString();

  getTrips(){
    const token = this.gs.authResponse.token;
    const req={token:token};  
    this.clientService.getTrips(req.token).then((res: any) => {
        if (res) {
         this.Trips= res;
         this.Trips = Array.of(this.Trips);
         console.log('id',this.Trips[0]);
         for(let trip of this.Trips[0])
         {
           console.log('id',trip.trip_id);

        }
          
        
        }
           
         
      });}

      getDetails(id)
      {
    this.router.navigate(['trip-details', { id: id }])
  }

}
