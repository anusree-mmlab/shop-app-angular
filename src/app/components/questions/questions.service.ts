import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import * as question_answer_json from './question-answer.json';
//import { of } from 'rxjs/observable/of';

@Injectable()
export class QuestionsService {
    constructor(private http : HttpClient) {

    }

    questions = [
        {question:"What is Angular?", answer: "Angular is js frameworks to build reactive web apps"}
    ];

    getQuestionsAndAnswers(): Observable<any> {
        const questionsObservable = Observable.create( (observer) => {
            //observer.next(this.questions);
            observer.next(question_answer_json);
            observer.complete();
        });

        return questionsObservable;
    }

    getQuestionAndAnswerFromAPI(): Observable<any> {

        const fileContentObservable =  this.http.get('https://jsonplaceholder.typicode.com/posts/1');

        return fileContentObservable;
    }

}