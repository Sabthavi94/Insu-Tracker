import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from './loader.service';
import { AppConfig } from '../config';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(public loaderService: LoaderService) {
  }

  static isInternalRequest(url) {
    return url.includes(AppConfig.API_URL);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (LoaderInterceptor.isInternalRequest(req.url)) {
      this.loaderService.initLoader();
    }

    return next.handle(req).pipe(
      finalize(() =>
        this.loaderService.destroyLoader()
      )
    );
  }
}

// https://firstclassjs.com/display-a-loader-on-every-http-request-using-interceptor-in-angular-7/
