import { Component, OnInit } from '@angular/core';
import { Question } from '../_models/question';
import { QuestionsService } from '../_services/questions.service'
import { UsersService } from '../_services/users.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-lets-play',
  templateUrl: './lets-play.component.html',
  styleUrls: ['./lets-play.component.css']
})
export class LetsPlayComponent implements OnInit {

    questions: Question[];
    currentUser: any;

    //TODO: need a currentUser... :(

    constructor( private _questionsService: QuestionsService, private _usersService: UsersService, private _redirect: Router ) {
        this._questionsService.questionsObserver.subscribe(
            (data) => {
                this.questions = data;
            }
        )
        this._usersService.currentUserObserver.subscribe(
            (data) => {
                this.currentUser = data;
            }
        )
    }

    ngOnInit() {
        this._questionsService.retrieveAll();
    }

    onSubmit() {
        console.log(this.currentUser);
    }
    onCancel() {

    }

}

// this._redirect.navigate(['/home']);
