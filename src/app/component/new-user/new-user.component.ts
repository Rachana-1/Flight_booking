import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators } from  '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Bookings} from 'src/app/data.model';
import {AuthenticationService} from 'src/app/services/authentication.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  myForm : FormGroup;
  regimes = ['12','13','14'];
  pcount = false;
  fCity = '';
  minDate = new Date();
  toMinDate : any;
  tCity : any;
  fromPlaces = ['Hyderabad', 'Delhi', 'Bangalore', 'Mumbai', 'Goa', 'Chennai', 'Vijayawada', 'Vizag'];
  toPlaces = ['Hyderabad', 'Delhi', 'Bangalore', 'Mumbai', 'Goa', 'Chennai', 'Vijayawada', 'Vizag'];
  flightNames = ['Indigo', 'GoAir', 'Jet Airways', 'Air Asia', 'Spicejet', 'Vistara'];
  timings = ['6:00 AM', '7:00 AM', '8:00AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM'
  ,'03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM'];
  radiobtns = ['Yes', 'No'];
  radiobtns2 = ['Round Trip', 'One Way'];
  hideTo = false;
  booking : Bookings;
  constructor(private _fb : FormBuilder,private router : Router,private authService : AuthenticationService, private userService : UserServiceService) { }

  ngOnInit() {
    this.myForm = this._fb.group({
      tripType : ['', Validators.required],
      fromPlace : ['', Validators.required],
      toPlace : ['', Validators.required],
      fromDate :['', Validators.required] ,
      toDate : '',
      count: ['', Validators.required],
      flight_name : ['', Validators.required],
      timing : ['', Validators.required],
      luggage : ['', Validators.required],
      passenger_name1 : ['', Validators.required],
      passenger_name2 : ''
    });

  }

  pCount(event){
    if(event.checked){
      this.myForm.get('passenger_name2').setValidators([Validators.required]);
    }
    else{
      this.myForm.get('passenger_name2').clearValidators();
      this.myForm.get('passenger_name2').updateValueAndValidity();
    }
  }
  getDetails(){
    this.userService.getUserDetails().subscribe(data => {
      console.log(data);
    })
  }
  tripType(event){
    console.log(event.value);
    if(event.value=== 'One Way'){
      this.hideTo = true;
      this.myForm.get('toDate').clearValidators();
      this.myForm.get('toDate').updateValueAndValidity();
    }
    else{
      this.hideTo = false;
      this.myForm.get('toDate').setValidators([Validators.required]);
    }
  }
  submit(){
    console.log(this.myForm.value);
    this.booking = this.myForm.value;
    this.booking.user_email = this.authService.currentUserValue[0].email;
    this.booking.status = 'BOOKED';
    if(this.myForm.value.tripType === 'One Way'){
      this.myForm.value.toDate = '';
    }
    //console.log(this.authService.currentUserValue);
    //var fullData = Object.assign(this.myForm.value, this.booking.user);
    console.log(this.booking);
    this.userService.submitNewBookingDetails(this.booking).subscribe(data => {
      alert('Success');
      this.router.navigate(['/home']);
    })
  }

}
