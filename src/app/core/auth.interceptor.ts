import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Inject } from '@angular/core';
import { ToasterService } from 'angular5-toaster';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';

export class AuthInterceptor implements HttpInterceptor {
  constructor(
    @Inject(AuthService) private authService: AuthService,
    @Inject(ToasterService) private toaster: ToasterService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Clone the request to add the new header
    const clonedRequest = req.clone({
      headers: req.headers.set(
        'Authorization',
        'Bearer ' + this.authService.getAccessToken()
      )
    });

    // Pass the cloned request instead of the original request to the next handle
    return next.handle(clonedRequest).catch((error, caught) => {
      //intercept the respons error and displace it to the console
      //console.log(`${error.status} (${error.statusText})`, error.message);
      this.toaster.pop(
        'error',
        `${error.status} (${error.statusText})`,
        error.message
      );
      //return the error to the method that called it
      return Observable.throw(error);
    }) as any;
  }
}
