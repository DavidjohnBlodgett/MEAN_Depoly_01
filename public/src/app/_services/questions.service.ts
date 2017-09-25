import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import "rxjs";
import { Question } from '../_models/question';
import { Toolbox } from './-toolbox';

@Injectable()
export class QuestionsService {

    toolbox = new Toolbox();
    questions: Question[] = [];
    questionsObserver = new BehaviorSubject(this.questions);

    constructor( private _http: Http ) { }

    retrieveAll() {
        this._http.get('/questions')
        .subscribe(
              (response) => {
                    this.questions = response.json();
                    this.questionsObserver.next(this.questions);
              },
              (err) => {
                  console.log('ERROR FROM (GET) REQUEST TO API')
              }
        )

    }
    // retrieveOne(id) {
    //     return this.toolbox.search(this.questions, '_id' , id);
    // }
    create(question) {
        // var body = {};
        // body['name'] = username;

        return this._http.post('/questions', question)
        .subscribe(
              (response) => {
                    this.retrieveAll();
                    return true;
              },
              (err) => {
                  console.log('ERROR FROM (POST) REQUEST TO API');
                  return false;
              }
        )
    }

}
