import { JwtService } from 'src/app/core/services/jwt.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor(private jwt:JwtService ) {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   console.log("inside interceptor");
    let token = this.jwt.getToken();
    let Authorization = token ? `${token}` : null
    request = request.clone({
      setHeaders: {
        ...(Authorization && {Authorization})
      }
    })
    return next.handle(request);
  }
}
