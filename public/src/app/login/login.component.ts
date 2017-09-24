import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:object = {
    name: ""
  }

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  onLogin() {
    console.log('onLogin()', this.user);
    this._httpService.create(this.user)
    .then((data)=> {
      console.log(data);
      if(data.errors) {
        console.log('returned from backend', data);
      }
      else {
        console.log('Successful Logged IN!');
        this._router.navigate(['listing']);
      }
    })
  }

}
