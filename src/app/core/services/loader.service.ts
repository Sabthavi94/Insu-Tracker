import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoaderService {

    constructor() {
    }

    isLoading = new Subject<boolean>();
    numOfCall = 0;

    show() {
        this.isLoading.next(true);
    }

    hide() {
        this.isLoading.next(false);
    }

    public initLoader() {
        if (this.numOfCall === 0) {
            this.numOfCall = this.numOfCall + 1;
            this.show();
        } else {
            this.numOfCall = this.numOfCall + 1;
        }
    }

    public destroyLoader() {
        if (this.numOfCall <= 1) {
            setTimeout(() => {
                this.hide();
            }, 300);
            this.numOfCall = 0;
        } else {
            this.numOfCall = this.numOfCall - 1;
        }
    }
}


// public async destroyLoader() {
//     setTimeout(() => {
//         if (this.loader) {
//             if (this.numOfCalls <= 1) {
//                 this.loader.dismiss();
//                 this.numOfCalls = 0;
//                 this.loader = null;
//             } else {
//                 this.numOfCalls = this.numOfCalls - 1;
//             }
//         }
//     }, 200);
// }
