import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  uname = '';
  constructor(private userService: UserServiceService, private router: Router) { }

  ngOnInit() {
    this.uname = 'Harsha Vardhan';
    console.log(this.userService.checkIsLogin())
    // if(!this.userService.checkIsLogin()){
    //   this.router.navigate(['/login']);
    // }
  }

  search(event: any){
    console.log(event.target.value);
  }

}
