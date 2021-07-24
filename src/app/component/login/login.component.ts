import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm : FormGroup;
  btnValue = true;
  btnValues = 'Sign Up';
  constructor(private _fb : FormBuilder, private userService : UserServiceService, private authenticationService: AuthenticationService
    ,private router: Router) { }

  ngOnInit() {
    this.btnValue = true;
    this.btnValues = 'Sign Up';
    this.myForm = this._fb.group({
      'uName' : '',
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'pwd': ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    })
  }

  loggedIn(){

    this.authenticationService.signIn(this.myForm.value).subscribe(data=>{
      if(data[0].email === this.myForm.value.email && data[0].pwd === this.myForm.value.pwd){
        alert('Successfully logged in');
        this.router.navigate(['/home']);
      }
    });

  }


  loginOrSignup(){
    this.btnValue = !this.btnValue;
    if(this.btnValue){
      this.btnValues = 'Sign Up';
      this.myForm.controls['uName'].clearValidators();
      this.myForm.controls['uName'].updateValueAndValidity();
      this.myForm.get('email').setValue('',{emitEvent:false});
      this.myForm.get('pwd').setValue('',{emitEvent:false});

    }
    else{
      this.btnValues = 'Login';
      this.myForm.controls['uName'].setValidators([Validators.required]);

    }
  }

  SignUp(){
    this.userService.getUserDetailsByEmail(this.myForm.value.email).subscribe(data=>{
      if(Object.keys(data).length > 0){
        if(data[0].email === this.myForm.value.email){
          alert('Account Already Exists');
        }
      }
      else{
        this.authenticationService.login(this.myForm.value).subscribe(val=>{
          alert('Signed Up Successfully');
          this.ngOnInit();
          //this.router.navigate(['home']);
        })
      }


    });
  }

}
