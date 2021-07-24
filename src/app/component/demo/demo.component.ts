import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  myForm : FormGroup;
  userDetails : any;
  constructor(private _fb : FormBuilder,private authService : AuthenticationService) { }

  ngOnInit() {
    this.userDetails =  this.authService.currentUserValue[0];
    this.myForm = this._fb.group({
      uName : '',
      email : '',
      update_dt : ''
    })

    this.myForm.setValue({
      uName : this.userDetails.uName,
      email : this.userDetails.email,
      update_dt : new Date(this.userDetails.update_dt)
    })
  }

}
