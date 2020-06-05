import {HttpClient, HttpHeaders} from '@angular/common/http';
// import {Events} from '@ionic/angular';
import {Injectable} from '@angular/core';
// import {MainConfig} from '../config';
import {GetterSetter} from '../classes';
import { ToastController } from '@ionic/angular';


@Injectable()
export class HttpService {

    constructor(public httpClient: HttpClient,  private gs: GetterSetter, public toastController: ToastController ) {
    }

    httpGet(apiUrl: string, serviceConfig: any, path: string, body: any, header_value: any) {
        return new Promise((resolve, reject) => {
            const httpHeaders = this.setHeader(header_value);
            const url = apiUrl + serviceConfig + path;
            return this.httpClient.get(url, {headers: httpHeaders})
            .toPromise().then(response => {
                resolve(response);
            })
                .catch(error => {
                    this.handleError(error);
                    reject(error);
                });
        });
    }

    httpPost(apiUrl: string, serviceConfig: any, path: string, body: object, header_value: any) {
        if (!header_value) {
            header_value = {};
        }

        return new Promise((resolve, reject) => {
            const httpHeaders = this.setHeader(header_value);
            const url = apiUrl + serviceConfig + path;
            console.log('test', url, body)
          
            return this.httpClient.request('POST', url, {body, headers: httpHeaders})
                .toPromise()
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    this.handleError(error);
                    reject(error);
                });
        });
    }

    public httpPostFileUpload(apiUrl: string, serviceConfig: any, path: string, body: any, header_value: any) {
        return new Promise((resolve, reject) => {
            const httpHeaders = this.setHeaderFile(header_value);
            const url = apiUrl + serviceConfig + path;
            const formData: FormData = new FormData();

            for (const key in body) {
                formData.append(key, body[key]);
            }
            // , observe: 'response'
            return this.httpClient.request('POST', url, {body: formData, headers: httpHeaders})
                .toPromise()
                .then((response: any) => {
                    resolve(response);
                })
                .catch(error => {
                    // this.eventEmitterSev.onBroadcastHttpError(error);
                    this.handleError(error);
                    reject(error);
                });
        });
    }

    httpPut(apiUrl: string, serviceConfig: any, path: string, body: any, header_value: any) {
        return new Promise((resolve, reject) => {
            const req_body = JSON.stringify(body);
            const httpHeaders = this.setHeader(header_value);
            const url = apiUrl + serviceConfig + path;
            return this.httpClient.request('PUT', url, {body: req_body, headers: httpHeaders})
                .toPromise()
                .then(response => {
                    console.log('uu',response)
                    resolve(response);

                })
                .catch(error => {
                    this.handleError(error);
                    reject(error);

                });
        });
    }

    private setHeader(header_value: any) {
        // if (this.gs.authResponse && this.gs.authResponse.token) {
        //     header_value.sessionId = this.gs.authResponse.token;
        // }
        let header = new HttpHeaders();
        
        console.log('hh',header_value)
          if (header_value) {
        //     for (const key of Object.keys(header_value)) {
        //         header = header.set(key, header_value[key]);
        //     }
        header= header.set('Authorization','bearer '+this.gs.authResponse.token).set('Content-Type', 'application/json');

            console.log("sss", this.gs.authResponse.token);
            //  header=header.set('Authorization', this.gs.authResponse.token);
        }
        else{
            
        header=header.set('Content-Type', 'application/json');
        }

    
        return header;
    }

    private setHeaderFile(header_value: any) {
        if (this.gs.authResponse && this.gs.authResponse.sessionId) {
            header_value.sessionId = this.gs.authResponse.sessionId;
        }
        // let header = new HttpHeaders().set('sessionid', 'ff26cf14-aff0-422a-a643-4da440d976f5');
        let header = new HttpHeaders();
        if (header_value) {
            for (const key of Object.keys(header_value)) {
                header = header.set(key, header_value[key]);
            }
        }
        return header;
    }


    private handleError(error: any) {
        // this.events.publish('http:error', error);
        this.presentToast(error.error.error);
        console.log(error);
    }

    async presentToast(msg) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 2000,
            position: 'top',
            color: 'danger'
        });
        toast.present();
    }

    async newHttpGet(apiUrl: string, serviceConfig: any, path: string, header: any) {
        const httpHeaders = await this.setHeader(header);
        const url = apiUrl + serviceConfig + path;
        return await new Promise((resolve, reject) => {
            this.httpClient.get(url, {headers: httpHeaders}).toPromise().then(response => {
                resolve(response);
            }).catch(error => {
                reject(error);
            });
        });
    }

    async newHttpPost(apiUrl: string, serviceConfig: any, path: string, header: any, body: any) {
        const httpHeaders = await this.setHeader(header);
        const url = apiUrl + serviceConfig + path;
        return await new Promise((resolve, reject) => {
            return this.httpClient.request('POST', url, {
                body,
                headers: httpHeaders
            }).toPromise().then(response => {
                resolve(response);
            })
                .catch(error => {
                    this.handleError(error);
                    reject(error);
                });
        });
    }

}
