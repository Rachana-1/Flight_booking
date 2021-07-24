import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  uname = 'Welcome ';
  val : any;
  constructor(private userService: UserServiceService, private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    const currentUser = this.authenticationService.currentUserValue;
    if(currentUser){
      this.uname = 'Welcome '+this.authenticationService.currentUserValue[0].uName;
    }
    // if(localStorage.getItem('currentUser') != null){
    //   console.log(JSON.parse(localStorage.getItem('currentUser')));
    //   this.val =  JSON.parse(localStorage.getItem('currentUser'));
    //   console.log(this.val[0]);
    //   this.uname = 'Welcome '+this.val[0].uName;
    // }

   // console.log(this.userService.checkIsLogin())
    // if(!this.userService.checkIsLogin()){
    //   this.router.navigate(['/login']);
    // }
  }

  search(event: any){
    console.log(event.target.value);
  }

  logOut(){
    this.authenticationService.logout();
  }

}
