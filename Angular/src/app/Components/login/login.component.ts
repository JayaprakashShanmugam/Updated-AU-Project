import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { LoginUserService } from '../login-user.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinForm: FormGroup;
  user: SocialUser;
  loggedIn: boolean;    
  message:string;
  constructor(private fb: FormBuilder, private authService: AuthService, private loginservice:LoginUserService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    
  }
  signOut(): void {
    
    this.authService.signOut();
    localStorage.removeItem('idtoken');
    localStorage.removeItem('useremail');
    
  }

  rememberuser() : void
  {
    
    localStorage.setItem('idtoken',this.user.id);
    localStorage.setItem('useremail',this.user.email);
    let resp= this.loginservice.dosaveuser(this.user.firstName,this.user.lastName,this.user.email);
    resp.subscribe((data:string)=>this.message=data);
    this._snackBar.open("Response:","User Synced with server", {
      duration: 2000,
    }); 
    
  }

  


}
