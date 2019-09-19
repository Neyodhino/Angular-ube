import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthenticationService, private router: Router) {}
  canActivate(): Observable<boolean> | boolean {
    return this.auth.afAuth.authState.pipe (map(auth => {
      if (!auth) {
        this.router.navigate(['/login']);
        return true;
      } else {
        return false;
      }
    }));
  }
}
