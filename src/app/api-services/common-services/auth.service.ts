import {Injectable} from '@angular/core';
import {GetterSetter} from '../../core/classes';
// import {Events} from '@ionic/angular';
import {LocalStorageService} from '../../core/services';
// import {MainConfig} from '../../core/config';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private localStorage: LocalStorageService, private gs: GetterSetter,
                ) { /*private toastMessage: ToastMessageService, private events: Events*/
    }

    setAuthResponse(authObject) {
        this.localStorage.set('AUTH_RESPONSE_PHARMACY', authObject);
        this.gs.authResponse = authObject;
    }

    getAuthResponse() {
        return this.localStorage.get('AUTH_RESPONSE_PHARMACY');
    }

    removeAuthResponse() {
        try {
            this.localStorage.remove('AUTH_RESPONSE_PHARMACY');
            this.gs.authResponse = null;
        } catch (e) {
            console.log(e);
        }

    }

    public handleAuthResponse(authObject) {
        return new Promise(async (resolve) => {
            // const authObjectCopy = Object.assign({}, authObject);
            if (authObject.status === 1) {
                this.setAuthResponse(authObject);
                // this.events.publish('user:login');
                resolve(true);
            } else {
                this.removeAuthResponse();
                resolve(false);
            }
        });
    }
}

