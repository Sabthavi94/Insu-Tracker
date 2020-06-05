import {Injectable} from '@angular/core';
import {GetterSetter} from '../../core/classes';
// import {Events} from '@ionic/angular';
import {LocalStorageService} from '../../core/services';
// import {MainConfig} from '../../core/config';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private localStorage: LocalStorageService, private gs: GetterSetter,
                ) { /*private toastMessage: ToastMessageService, private events: Events*/
    }

    setUser(userObject) {
        this.localStorage.set('USER', userObject);
        this.gs.userResponse = userObject;
    }

    getUser() {
        return this.localStorage.get('USER');
    }

    setresult(resultObject) {
        this.localStorage.set('RESULT', resultObject);
        this.gs.userResponse = resultObject;
    }

    getresult() {
        return this.localStorage.get('RESULT');
    }

   


   
}

