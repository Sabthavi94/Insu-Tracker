import { Component,AfterContentInit,  ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-driving-insight',
  templateUrl: './driving-insight.page.html',
  styleUrls: ['./driving-insight.page.scss'],
})
export class DrivingInsightPage {

  @ViewChild('speedd' , {static: false}) speedd: any;
  @ViewChild('speedm' , {static: false}) speedmonthy: any;
  @ViewChild('scoredaily' , {static: false}) scoredaily: any;
  @ViewChild('scoremonthly' , {static: false}) scoremonthly: any;
  bars1: any;
  bars2: any;
  bars3: any;
  bars4: any;
  colorArray1: any;
 
  public category: string;
  public categoryscore: string;
  public categoryspeed: string;

  constructor() {
    this.category = 'speed';
    this.categoryspeed='speeddaily';
   this.categoryscore='scoredaily';
   
  }

  // ngOnInit() {
  // //   this.category = 'speed';
  // //   this.categoryspeed='speeddaily';
  // //  this.categoryscore='scoremonthly';
 
 
  // }

  ngAfterViewInit() {
    console.log("afterinit");
    setTimeout(() => {
      // this.speedDaily();
    this.speedMonthly();
    // this.scoreDaily();
    // this.scoreMonthly();
    }, 5000);
    setTimeout(() => {
      // this.speedDaily();
    // this.speedMonthly();
     this.scoreDaily();
    // this.scoreMonthly();
    }, 20000);
    setTimeout(() => {
      // this.speedDaily();
    // this.speedMonthly();
    //  this.scoreDaily();
    this.scoreMonthly();
    }, 20000);
  }
  ngAfterContentInit() {
    // // this.speedDaily();
    // this.speedMonthly();
    // this.scoreDaily();
    // this.scoreMonthly();
}

  ionViewDidEnter() {
    this.speedDaily();
    // this.speedMonthly();
    // this.scoreDaily();
    // this.scoreMonthly();
  }

  

  
  segmentChanged(event:any) {
  
  }

  speedChanged(event:any){
    this.categoryscore='scoredaily';
  }

  scoreChanged(event:any){
    
  }
  speedDaily() {
    this.bars1 = new Chart(this.speedd.nativeElement, {
      type: 'line',
      data: {
        labels: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','22','23','24','25','26','27','28','29','30','31'],
        datasets: [{
          label: 'Daily Average Speed',
          data: [50,80,65,75,50,70,90,70,50,80,70,60,50,60,70,55,55,90,50,70,45,48,50,64,75,45,56,50,80],
          backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  speedMonthly() {
    this.bars2 = new Chart(this.speedmonthy.nativeElement, {
      type: 'line',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
          label: 'Monthly Average Speed',
          data: [70,50,60,60,90],
          backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  scoreDaily() {
    this.bars3 = new Chart(this.scoredaily.nativeElement, {
      type: 'line',
      data: {
        labels: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','22','23','24','25','26','27','28','29','30','31'],
        datasets: [{
          label: 'Daily Average Driving Score',
          data: [60,80,50,70,40,70,90,50,70,40,80,70,60,50,55,45,65,75,48,50,64,75,45,56,50,60,70,50,80],
          backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  scoreMonthly() {
    this.bars4 = new Chart(this.scoremonthly.nativeElement, {
      type: 'line',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
          label: 'Monthly Average Driving Score',
          data: [90,50,70,80,60],
          backgroundColor: 'rgba(0,0,0,0)', // array should have same number of elements as number of dataset
          borderColor: 'rgb(38, 194, 129)',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
