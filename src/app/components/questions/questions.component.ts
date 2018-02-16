import { Component, OnInit } from '@angular/core';

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
    public itemPerPageCount: number = 5;
    public pageCount: number[] = [];
    public questionModules:string[] = ['basic'];

    constructor(public questionsService: QuestionsService) {

    }

    ngOnInit() {
        this.questionsService.getQuestionsAndAnswers().subscribe((result) => {
            this.questionAnswerArr = result;

            const pCount = Math.ceil(this.questionAnswerArr.length / this.itemPerPageCount);

            for (let i = 0; i < pCount; i++) {
                this.pageCount.push(i + 1);
            }

            this.preparePager(1);
        });

       //An http API call example
      /*  this.questionsService.getQuestionAndAnswerFromAPI().subscribe((result) => {
        console.log('POSTS', result);
       }); */
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
}
