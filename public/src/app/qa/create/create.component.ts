import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  newQ = {
    question: "",
    description: ""
  }

  ngOnInit() {
  }


  newQuestion() {
    console.log('newQuestion()', this.newQ);
    this._httpService.createQ(this.newQ)
    .then((data)=> {
      console.log("Returned from backend, Success!", data);
      this._router.navigate(['listing']);
    })
  }

}
