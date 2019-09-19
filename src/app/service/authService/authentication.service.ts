import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserInterface } from '../../models/user-interface';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user$: Observable<firebase.User>;

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.user$ = this.afAuth.authState;
   }

  loginUser(value: UserInterface): any {
    this.afAuth.auth.signInWithEmailAndPassword(value.email, value.password)
      .then(_ => {
        this.router.navigate(['/dashboard']);
        this.toastr.success('You are Logged in successfully', 'Notification!');
      })
      .catch((err) => {
        console.log(err);
        this.toastr.error(err.message, 'Notification');
      });
  }

  logOutUser () {
    this.afAuth.auth.signOut();
    this.router.navigate(['/login']);
  }
}
