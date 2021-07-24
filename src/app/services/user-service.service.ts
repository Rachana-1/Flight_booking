import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders, HttpParams } from '@angular/common/http';
import { unwrapResolvedMetadata } from '@angular/compiler';
import { AuthenticationService} from './authentication.service';
import {  BehaviorSubject,Subject, Observable} from 'rxjs';
import { User, Bookings } from 'src/app/data.model';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  isLogin = false;
  base = 'http://localhost:3000/api';
  bookingDetails = new Subject<any>();
  constructor(private http : HttpClient, private authservice : AuthenticationService) { }

  checkIsLogin(){
    return this.isLogin;
  } 

  loggedIn(){
    this.isLogin = true;
    return this.isLogin;
  }

  loggedOut(){
    this.isLogin = false;
    return this.isLogin;
  }

  getUserDetails(){
    return this.http.get(this.base+'/getUser', {withCredentials : true});
  }
  getBookingDetails(email : any){
    this.http.get(this.base+'/getBookingDetails/'+email, {withCredentials : true}).subscribe(val=>{
      console.log('Observable    '+val)
      this.bookingDetails.next(val);
    }
    );
    return this.bookingDetails.asObservable();

  }
  getBookingObservableDetails() : Observable<any> {
    return
  }

  getUserDetailsByEmail(email :any){
    return this.http.get(this.base+'/getUserById/'+email, {withCredentials:true});
  }

  getBookingDetailsById(id : any){
    return this.http.get(this.base+'/getBookingById/'+id, {withCredentials:true});
  }
  submitNewUserDetails(data : any){
    const body = {
      uName : data.uName,
      pwd : data.pwd,
      email : data.email,
      update_dt : new Date()
    }
    return this.http.post(this.base+'/postNewUser', body, {withCredentials: true});
  }
  submitNewBookingDetails(body : any){ 
    return this.http.post(this.base+'/postNewBooking', body, {withCredentials: true});
  }
  updateBookingDetails(data : any, id : any){
    const body = data;
    return this.http.put(this.base+'/updateBooking/'+id, body , {withCredentials:true});
  }
  deleteBookingDetails(id : any){
    return this.http.delete(this.base+'/deleteBooking/'+id, {withCredentials: true});
  }
}
