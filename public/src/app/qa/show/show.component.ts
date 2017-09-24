import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  thisQuestion:object;
  q_id = ""
  like:number = 0;

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.grabThisQuestion();
  }

  grabThisQuestion() {
    this._route.paramMap.subscribe(params=> {
      this.q_id = params.get('id');
      console.log(this.q_id);
    })
    console.log('Grabbing Question..');
    this._httpService.grabThisQuestion(this.q_id)
    .then((data)=> {
      console.log(data);
      this.thisQuestion = data;
    })
  }

  home() {
    console.log('home');
    this._router.navigate(['listing'])
  }

  likes() {
    this.like += 1;
  }


}
