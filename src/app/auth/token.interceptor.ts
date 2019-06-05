import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http'
import { Observable } from 'rxjs'
import { LoginService } from '../services/login.service'
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public loginService: LoginService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const updatedRequest = request.clone({
      setHeaders: {
        AuthenticationToken: this.loginService.getToken()
      }
    })
    return next.handle(updatedRequest)
  }
}
