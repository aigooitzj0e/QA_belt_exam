import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  create(user) {
    console.log('hit create service');
    return this._http.post('/api/register', user)
    .map(Response=> Response.json())
    .toPromise();
  }

  getCurrentUser() {
    console.log('hit getCurrentUser() in service');
    return this._http.get('/api/current')
    .map(Response=> Response.json())
    .toPromise();
  }

  createQ(question) {
    console.log('hit createQ service');
    return this._http.post('/api/createQ', question)
    .map(Response=> Response.json())
    .toPromise();
  }

  getAllQuestions() {
    console.log('getAllQuestions in service');
    return this._http.get('/api/getAllQuestions')
    .map(Response=> Response.json())
    .toPromise();
  }

  grabThisQuestion(q_id) {
    console.log('hit grabThisQuestion in service');
    return this._http.post('/api/grabThisQuestion', {q_id: q_id})
    .map(Response=> Response.json())
    .toPromise();
  }

  newAnswer(answer, q_id) {
    console.log('hit newAnswer in Services');
    return this._http.post('/api/newAnswer', {answer, q_id: q_id})
    .map(Response=> Response.json())
    .toPromise();
  }

  logoff() {
    console.log('hit logoff service!');
    return this._http.get('/api/logoff')
    .map(Response=> Response.json())
    .toPromise();
  }

}
