import { Component, OnInit } from '@angular/core';
import {AuthenticationServeService} from '../services/authentication-serve.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn:boolean;
  constructor(private authenticationService:AuthenticationServeService) { }

  ngOnInit(): void {
    this.authenticationService.currentUser.subscribe((user)=>{
      if(user.products){
        this.isLoggedIn = true;
      }
    });
  }

  logout(){
    
  }

}
