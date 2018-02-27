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
    public totalQuestioncount: number;
    public selectedSubject: string;

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
        
        switch (this.selectedSubject) {
            case 'angular':
                return this.http.get('http://localhost:4000/general/angular/fileread');
            case 'react':
                return this.http.get('http://localhost:4000/general/react/fileread');
            case 'node':
                return this.http.get('http://localhost:4000/general/node/fileread');
            case 'javascript':
            return this.http.get('http://localhost:4000/general/purejs/fileread');
            default:
                return this.http.get('http://localhost:4000/general/angular/fileread');
        }
    }

    appendNewQuestionToFile(qObj: any) {
       console.log('appendNewQuestionToFile', this.selectedSubject, qObj);
       switch (this.selectedSubject) {
        case 'angular':
            this.http.post('http://localhost:4000/general/angular/fileappend', qObj).subscribe((res) => {
                console.log(res);
           });
           break;
        case 'react':
            this.http.post('http://localhost:4000/general/react/fileappend', qObj).subscribe((res) => {
                console.log(res);
           });
           break;
        case 'node':
            this.http.post('http://localhost:4000/general/node/fileappend', qObj).subscribe((res) => {
                console.log(res);
           });
           break;
        case 'javascript':
           this.http.post('http://localhost:4000/general/purejs/fileappend', qObj).subscribe((res) => {
               console.log(res);
          });
          break;
        default:
            return {message: 'No insert is done as the subject is not selected'};
        }
    }

    editQuestionInFile(qObj: any, indx: number) {

        switch (this.selectedSubject) {
            case 'angular':
                this.http.post('http://localhost:4000/general/angular/fileupdate', {item: qObj, index: indx}).subscribe((res) => {
                    console.log(res);
               });
               break;
            case 'react':
               this.http.post('http://localhost:4000/general/react/fileupdate', {item: qObj, index: indx}).subscribe((res) => {
                    console.log(res);
               });
               break;
            case 'node':
                this.http.post('http://localhost:4000/general/node/fileupdate', {item: qObj, index: indx}).subscribe((res) => {
                    console.log(res);
               });
               break;
            case 'javascript':
                this.http.post('http://localhost:4000/general/purejs/fileupdate', {item: qObj, index: indx}).subscribe((res) => {
                    console.log(res);
                });
                break;
            default:
                return {message: 'No update is done as the subject is not selected'};
        }
     }

     setSelectedQuesion(questionObj, id) {
        this.selectedQuestion = questionObj;
        this.selectedQuestionIndex = id;
     }

     setTotalQuesionCount(qcount) {
        this.totalQuestioncount = qcount;
     }

     setSelectedSubject(subject:string) {
         this.selectedSubject = subject;
     }
 

  /*   async appendNewQuestionToFile() {

        await fs.appendFile('./question-answer.json', 'data to append');
    }
 */
}