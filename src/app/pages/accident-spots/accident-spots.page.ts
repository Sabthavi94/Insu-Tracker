import { Component, OnInit } from '@angular/core';
import { GoogleMaps, GoogleMap,    Marker} from '@ionic-native/google-maps';
import { Platform } from '@ionic/angular';
import {ClientService} from '../../api-services/api-data-services';
import {GetterSetter} from '../../core/classes';
import {UserService} from '../../api-services/common-services';

@Component({
  selector: 'app-accident-spots',
  templateUrl: './accident-spots.page.html',
  styleUrls: ['./accident-spots.page.scss'],
})
export class AccidentSpotsPage implements OnInit {

   map: GoogleMap;
   marker:Marker;
   AccidentSpots:any = {};
   constructor(private platform:Platform ,public gs: GetterSetter,private us:UserService, private clientService: ClientService
    ) { }
async  ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    await this.platform.ready();
     await this.loadMap();
    await this.getaccidentspots();
  }

  getaccidentspots(){
    const token = this.gs.authResponse.token;
    const req={token:token};
    this.clientService.getaccidentspot(req.token).then((res: any) => {
      if (res) {
        console.log(res.accident_spot);
         this.AccidentSpots=res.accident_spot;
         for(let spot of  res.accident_spot)
      {
        
        if(spot.severity >= 0 && spot.severity < 25){
          this.map.addMarkerSync({
            title:'\''+spot.latitude+','+ spot.longitude+'\'',
            snippet: spot.severity+ '%',
            icon:'blue',
            position: {lat:spot.latitude,lng:spot.longitude},
            animation: 'DROP'
          });
        }
        else if (spot.severity >= 25 && spot.severity < 50){
          this.map.addMarkerSync({
            title:'\''+spot.latitude+','+ spot.longitude+'\'',
            snippet: spot.severity + '%',
            icon:'orange',
            position: {lat:spot.latitude,lng:spot.longitude},
            animation: 'DROP'
          });
        }
        else{
          this.map.addMarkerSync({
            title:'\''+spot.latitude+','+ spot.longitude+'\'',
            snippet: spot.severity + '%',
            icon:'red',
            position: {lat:spot.latitude,lng:spot.longitude},
            animation: 'DROP'
          });
        }

        
        
        

      }
       } else {
        console.log(res);
        // this.presentToast(res.error, 'error').then();
      }
    });
  }
  loadMap(){
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {//Wellawatte dehiwala area
          lat: 6.856123,
          lng: 79.865892
        },
        zoom: 15,
        tilt: 30
      }
    });

           
    
    
    // this.map.addMarkerSync({
    //   title: '6.863252,79.863565',
    //   snippet: '70%',
    //   icon:'red',
    //   position: {lat:6.863252,lng:79.863565},
    //   animation: 'DROP'
    // });

    // this.map.addMarkerSync({
    //   title: '6.854351,79.861246',
    //   snippet: '30%',
    //   icon:'orange',
    //   position: {lat:6.854351,lng:79.861246},
    //   animation: 'DROP'
    // });

    // this.map.addMarkerSync({
    //   title: '6.862601,79.860020',
    //   snippet: '55%',
    //   icon:'red',
    //   position: {lat:6.862601,lng:79.860020},
    //   animation: 'DROP'
    // });

    // this.map.addMarkerSync({
    //   title: '6.859611,79.867638',
    //   snippet: '28%',
    //   icon:'orange',
    //   position: {lat:6.859611,lng:79.867638},
    //   animation: 'DROP'
    // });

    // this.map.addMarkerSync({
    //   title: '6.864431,79.864412',
    //   snippet: '22%',
    //   icon:'blue',
    //   position: {lat:6.864431,lng:79.864412},
    //   animation: 'DROP'
    // });

    // this.map.addMarkerSync({
    //   title: '6.858307,79.866514',
    //   snippet: '15%',
    //   icon:'blue',
    //   position: {lat:6.858307,lng:79.866514},
    //   animation: 'DROP'
    // });

    // this.map.addMarkerSync({
    //   title: '6.850890,79.868653',
    //   snippet: '19%',
    //   icon:'blue',
    //   position: {lat:6.850890,lng:79.868653},
    //   animation: 'DROP'
    // });
  }

  // async onButtonClick() {
    
    
  // }

  
}
