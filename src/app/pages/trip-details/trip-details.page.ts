import { Component, OnInit } from '@angular/core';
import { GoogleMaps, GoogleMap,  GoogleMapsEvent,  Marker,  GoogleMapsAnimation,  MyLocation} from '@ionic-native/google-maps';
import { Platform } from '@ionic/angular';
import {Router, ActivatedRoute} from '@angular/router';
import {ClientService} from '../../api-services/api-data-services';
import {AuthService} from '../../api-services/common-services';
import {GetterSetter} from '../../core/classes';
import {UserService} from '../../api-services/common-services'; 
import {ToastController} from '@ionic/angular'; 

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.page.html',
  styleUrls: ['./trip-details.page.scss'],
})
export class TripDetailsPage implements OnInit {
  map: GoogleMap;
  Trip:any={};
  TripDetails:any = [];
  AccidentSpots:any=[];
  point:any=[];
 id:any;
  constructor(private platform:Platform ,private router: Router,public toastController: ToastController,
    private clientService: ClientService,  private auth: AuthService,  public gs: GetterSetter,private us:UserService,private route: ActivatedRoute
    ) { }

    async ngOnInit() {
      // Since ngOnInit() is executed before `deviceready` event,
      // you have to wait the event.
      await this.platform.ready();
      await this.loadMap();
      this.id=this.route.snapshot.paramMap.get('id'); 
      await this.getTripDeatils(this.id);
      
    }

    getTripDeatils(id){

    const token = this.gs.authResponse.token;
    const req={token:token};  
    this.clientService.getTripDetails(req.token,id).then((res: any) => {
      if (res) {
        this.Trip=res;
         this.TripDetails= res.driving_location;
         this.TripDetails = Array.of(this.TripDetails); 
         this.AccidentSpots = res.accident_spot;
         console.log('viewtrip',this.TripDetails[0]);

        
         
         for(let trip of this.TripDetails[0]){
          for(let spot of this.AccidentSpots){

        
          console.log('date', trip.date, trip.location);

          if((spot.latitude !== trip.latitude)&& (spot.longitude !== spot.latitude)){
          if(Number(trip.speed)>=60){
            this.map.addMarkerSync({
              title: trip.location,
              snippet: '\''+trip.latitude+','+ trip.longitude+'\'',
              icon:{url: "./assets/speed.jpg",
              size: {
                width: 28,
                height: 27
              }},
              position: {lat:trip.latitude,lng:trip.longitude},
              animation: 'DROP'
        });
        console.log('hign',trip.location)
  
          }
          else{
            this.map.addMarkerSync({
              title: trip.location,
              snippet: '\''+trip.latitude+','+ trip.longitude+'\'',
              icon:'blue',
              position: {lat:trip.latitude,lng:trip.longitude},
              animation: 'DROP'
        });
        console.log('low',trip.location)
          }}
          else{
                
        
           console.log('acc',spot.severity);
           if(spot.severity >= 0 && spot.severity < 25){
             this.map.addMarkerSync({
              title: trip.speed + 'km/h',
              snippet: spot.severity + '%',
               icon:{url: "https://img.icons8.com/emoji/2x/green-circle-emoji.png",
               size: {
                 width: 28,
                 height: 27
               }},
               position: {lat:spot.latitude,lng:spot.longitude},
               animation: 'DROP'
             });
           }
   
           else if (spot.severity >= 25 && spot.severity < 50){
             this.map.addMarkerSync({
              title: trip.speed + 'km/h',
              snippet: spot.severity + '%',
               icon:{url: "https://img.icons8.com/emoji/2x/orange-circle-emoji.png",
               size: {
                 width: 28,
                 height: 28
               }},
               position: {lat:spot.latitude,lng:spot.longitude},
               animation: 'DROP'
             });
           }
           else{
             this.map.addMarkerSync({
              title: trip.speed+ 'km/h',
              snippet: spot.severity+ '%',
               icon:{url: "https://img.icons8.com/emoji/2x/red-circle-emoji.png",
               size: {
                 width: 28,
                 height: 28
               }},
               position: {lat:spot.latitude,lng:spot.longitude},
               animation: 'DROP'
             });
           }
          
   
   
            
          
          }
        


      
     
    
      

         }

        }

        for(let trip of this.TripDetails[0]){
this.point.push({ lat: Number(trip.latitude), lng: Number(trip.longitude)})
        }


         console.log('point',this.point);
              this.map.addPolyline({
          points: this.point,
          color : '#487EB0',
          width: 12,
          geodesic:false
      });


         
         
     
         
        

         
       }
    });
  }


    loadMap(){
      this.map = GoogleMaps.create('map_canvas', {
        camera: {
          target: {
            lat: 6.856123,
            lng: 79.865892
          },
          zoom: 15,
          tilt: 30
        }
      });

 


    }



}
