import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
//import { HttpHeaders } from '@angular/common/http';
import * as question_answer_json from './question-answer.json';

//import * as fs from 'async-file';

//import * as fs from 'fs';
//import { of } from 'rxjs/observable/of';

//import * as question_answer_json from 'questions.json';



@Injectable()
export class QuestionsService {
    public selectedQuestion: any;
    public selectedQuestionIndex: number;

    constructor(private http : HttpClient) {
    }

    questions = [
        {section:"basic",question:"What is Angular?", answer: ["Angular is js frameworks to build reactive web apps",
        "test"]}
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

        //const fileContentObservable =  this.http.get('https://jsonplaceholder.typicode.com/posts/1');

        //return fileContentObservable;

        
        return this.http.get('http://localhost:4000/general/fileread');
    }

    appendNewQuestionToFile(qObj: any) {
       this.http.post('http://localhost:4000/general/fileappend', qObj).subscribe((res) => {
            console.log(res);
       });
    }

    editQuestionInFile(qObj: any, indx: number) {
        this.http.post('http://localhost:4000/general/fileupdate', {item: qObj, index: indx}).subscribe((res) => {
             console.log(res);
        });
     }

     setSelectedQuesion(questionObj, index) {
        this.selectedQuestion = questionObj;
        this.selectedQuestionIndex = index;
     }
 

  /*   async appendNewQuestionToFile() {

        await fs.appendFile('./question-answer.json', 'data to append');
    }
 */
}