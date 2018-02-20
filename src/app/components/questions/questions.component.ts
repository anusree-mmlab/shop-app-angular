import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';

import { QuestionsService } from './questions.service';

@Component({
    selector : 'app-question-answer',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.css']
})
export class QuestionsComponent implements OnInit {
    public questionAnswerArr: any[];
    public questionAnswerArrPager: any[];
    public currentPage: number = 1;
    public itemPerPageCount: number = 10;
    public pageCount: number[] = [];
    public questionModules:string[] = ['basic'];
    public isFilteredRes:boolean = false;

    constructor(public questionsService: QuestionsService, public router: Router) {

    }

    fetchQuestionAnswers() {
        this.isFilteredRes = false;

        this.questionsService.getQuestionAndAnswerFromAPI().subscribe((result) => {
            this.questionAnswerArr = JSON.parse(result.data);

            const pCount = Math.ceil(this.questionAnswerArr.length / this.itemPerPageCount);

            this.pageCount = [];
            for (let i = 0; i < pCount; i++) {
            this.pageCount.push(i + 1);
            }

            this.preparePager(1);
        });
    }

    ngOnInit() {
        /*this.questionsService.getQuestionsAndAnswers().subscribe((result) => {
            this.questionAnswerArr = result;*/
        this.fetchQuestionAnswers();
    }

    preparePager(currentPage) {
        if((currentPage <=0) || (currentPage > this.pageCount.length)) {
            return true;
        }
        this.currentPage = currentPage;
        const QAPager = [...this.questionAnswerArr];

        const splitStart = (this.currentPage - 1) * (this.itemPerPageCount);

        this.questionAnswerArrPager = QAPager.splice(splitStart, this.itemPerPageCount);
    }

    getActiveProps(currentPage)
    {
        if(currentPage === this.currentPage) {
            return {backgroundColor: '#5c0949', color: 'white'};
        } else {
            return {backgroundColor: '#f9aa7f', color: 'black'};
        }
    }

    addNewQuestion() {
        this.router.navigate(['/questions-answers/new-question'],{fragment: 'create'});
    }

    editQuestion(questionObj, index) {
        //console.log(questionObj, index);

        this.questionsService.setSelectedQuesion(questionObj, index);
        this.router.navigate(['/questions-answers/new-question'],{fragment: 'edit'});
    }

    filterBySection(section: string=null) {
        if(section) {
            this.isFilteredRes = true;
            const currentResultSet = [...this.questionAnswerArr];
            
            this.questionAnswerArr =  _.filter(currentResultSet, { section: section});
            const pCount = Math.ceil(this.questionAnswerArr.length / this.itemPerPageCount);
            
            this.pageCount = [];
            for (let i = 0; i < pCount; i++) {
                this.pageCount.push(i + 1);
            }
    
            this.preparePager(1);
        } else {
            this.fetchQuestionAnswers();
        }
    }
}
