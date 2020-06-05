import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public selectedIndex = 0;
  public appPages = [
    
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'clipboard'
    },

    {
      title: 'My profile',
      url: '/profile',
      icon: 'person'
    },

    {
      title: 'Driving Insight',
      url: '/driving-insight',
      icon: 'bar-chart'
    },
      
    {
      title: 'Discount History',
      url: '/discount',
      icon: 'medal'
    },

    
    
    {
      title: 'Trip Details',
      url: '/mytrips',
      icon: 'location'
    },
    {
      title: 'Accident Areas',
      url: '/accident-spots',
      icon: 'warning'
    },

    {
      title: 'Input Data',
      url: '/data-input',
      icon: 'archive'
    },

    

    {
      title: 'Connect device',
      url: '/myhome',
      icon: 'duplicate'
    },

    {
      title: 'Logout',
      url: '/home',
      icon: 'log-out'
    },
    
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
