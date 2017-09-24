import { Component, OnInit } from '@angular/core';
import { HttpService } from './../../http.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  currentUser:object = {
    name: ""
  }

  thisList = [];
  qList: object[] = [];
  searchTerm:string = "";

  ngOnInit() {
    this.getCurrent();
    this.getAllQuestions();
  }

  getCurrent() {
    console.log('onInit getCurrentUser');
    this._httpService.getCurrentUser()
  	.then((data)=>{
  		console.log("then");
  		if(data.errors){
  			console.log("failed to find current user");
  			this._router.navigate(['']);
  		}else{
  			console.log("found current user");
	  		this.currentUser = data;
  		}
  	})
  }

  getAllQuestions() {
    this._httpService.getAllQuestions()
    .then((data)=> {
      console.log("Returned data:" ,data);
      this.qList = data;
      this.thisList = data;
    })
  }

  navCreate() {
    console.log('clicked navCreate');
    this._router.navigate(['create']);
  }

  onShow(qID) {
    console.log('onShow()', qID);
    this._router.navigate(['show', qID])
  }

  onAnswer(qID) {
    console.log('onShow()', qID);
    this._router.navigate(['answer', qID])
  }

  searchExams(){
    this.qList = this.thisList.filter((question)=>{
      return question.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || question.stack.toLowerCase().includes(this.searchTerm.toLowerCase());
    })
  }

  logoff() {
    console.log('logoff()');
    this._httpService.logoff()
    .then((data=> {
      if(data==true){
        this._router.navigate(['']);
      }
      else {
        console.log('error', data);
      }

    }))
  }

}
