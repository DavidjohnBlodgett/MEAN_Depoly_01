import { Component, OnInit } from '@angular/core';
import { Question } from '../_models/question';
import { QuestionsService } from '../_services/questions.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {

    questionForm = new Question();

    constructor( private _questionsService: QuestionsService, private _redirect: Router) { }

    ngOnInit() {

    }

    onSubmit() {
        this._questionsService.create(this.questionForm);
        alert('Your Question has been submitted!');
        this._redirect.navigate(['/home']);
    }
    onCancel() {
        alert('Your Question has not been submitted!');
        this._redirect.navigate(['/home']);
    }

}
