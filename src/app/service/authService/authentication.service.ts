import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserInterface } from '../../models/user-interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router
  ) { }

  loginUser(value: UserInterface): any {
    this.afAuth.auth.signInWithEmailAndPassword(value.email, value.password)
      .then(_ => {
        this.router.navigate(['/dashboard'])
      })
      .catch((err) => {console.log(err.message)});
  }
}
