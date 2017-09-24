import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  thisQuestion:object;
  q_id = ""

  newAnswer:object = {
    answer: "",
    description: ""
  }

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

  onAnswer() {
    console.log('onAnswer()', this.newAnswer);
    console.log(this.q_id);
    this._httpService.newAnswer(this.newAnswer, this.q_id)
    .then((data)=> {
      console.log(data);
    })
  }

  home() {
    console.log('home');
    this._router.navigate(['listing'])
  }


}
