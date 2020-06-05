import {Injectable} from '@angular/core';
import {DatePipe} from '@angular/common';
import {AppConfig} from '../../core/config';
import {HttpService} from '../../core/services';
import {GetterSetter} from '../../core/classes';
// import {Md5} from 'ts-md5';

// import {Md5} from 'ts-md5';

@Injectable()
export class ClientService {

    constructor(private httpService: HttpService, private gs: GetterSetter) {
    }

    

    public createCustomer(req) {
        // this.loader.initLoader();
        
        const promise = new Promise((resolve, reject) => {
         
            return this.httpService.httpPost(AppConfig.API_URL, '', '/register', req, null).then((data: any) => {
                console.log('test', req)
                resolve(data);
            }).catch(() => {
                reject(null);
            });
        });
        return promise;
    }

    public login(req) {
        // this.loader.initLoader();
        const promise = new Promise((resolve, reject) => {
            return this.httpService.httpPost(AppConfig.API_URL, '', '/login', req, null).then((data: any) => {
                resolve(data);
            }).catch(() => {
                reject(null);
            });
        });
        return promise;
    }

    
    public getCustomerDetails(req) {
        // this.loader.initLoader();
        
        const promise = new Promise((resolve, reject) => {
         
            return this.httpService.httpGet(AppConfig.API_URL, '', '/user/details?token='+ req, {}, null).then((data: any) => {
               
                resolve(data);
            }).catch(() => {
                reject(null);
            });
        });
        return promise;
    }

    public getresults(req) {
        // this.loader.initLoader();
        
        const promise = new Promise((resolve, reject) => {
         
            return this.httpService.httpGet(AppConfig.API_URL, '', '/result',true, req).then((data: any) => {
                
                resolve(data);
            }).catch(() => {
                reject(null);
            });
        });
        return promise;
    }

    public getaccidentspot(req) {
        // this.loader.initLoader();
        
        const promise = new Promise((resolve, reject) => {
         
            return this.httpService.httpGet(AppConfig.API_URL, '', '/location?token='+ req,true, null).then((data: any) => {
                
                resolve(data);
            }).catch(() => {
                reject(null);
            });
        });
        return promise;
    }

    public getTripId(req) {
        // this.loader.initLoader();
        
        const promise = new Promise((resolve, reject) => {
         
            return this.httpService.httpGet(AppConfig.API_URL, '', '/driving/info/add', {}, req).then((data: any) => {
               
                resolve(data);
            }).catch(() => {
                reject(null);
            });
        });
        return promise;
    }

    public addTripData(req,token) {
        // this.loader.initLoader();
        const promise = new Promise((resolve, reject) => {
            return this.httpService.httpPost(AppConfig.API_URL, '', '/driving/info/add', req, token).then((data: any) => {
                resolve(data);
            }).catch(() => {
                reject(null);
            });
        });
        return promise;
    }

    public getTrips(req) {
        // this.loader.initLoader();
        
        const promise = new Promise((resolve, reject) => {
         
            return this.httpService.httpGet(AppConfig.API_URL, '', '/driving/info', {}, req).then((data: any) => {
               
                resolve(data);
            }).catch(() => {
                reject(null);
            });
        });
        return promise;
    }

    public getTripDetails(req,tripId) {
        // this.loader.initLoader();
        
        const promise = new Promise((resolve, reject) => {
         
            return this.httpService.httpGet(AppConfig.API_URL, '', '/driving/info/'+tripId+'/view', {}, req).then((data: any) => {
               
                resolve(data);
            }).catch(() => {
                reject(null);
            });
        });
        return promise;
    }

}
