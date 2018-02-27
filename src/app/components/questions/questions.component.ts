import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

import { QuestionsService } from './questions.service';

@Component({
    selector : 'app-question-answer',
    templateUrl: './questions.component.html',
    styleUrls: ['./questions.css']
})
export class QuestionsComponent implements OnInit {
    public questionAnswerArr: any[];
    public questionAnswerArrCopy: any[];
    public questionAnswerArrPager: any[];
    public currentPage: number = 1;
    public itemPerPageCount: number = 10;
    public pageCount: number[] = [];
    public questionModules:string[] = ['basic'];
    public isFilteredRes:boolean = false;
    public selectedSubject: string = 'angular';
    public tagsArr:string[] = [];

    constructor(public questionsService: QuestionsService, 
        public router: Router,
        public route: ActivatedRoute
    ) {

    }

    fetchQuestionAnswers() {
        this.isFilteredRes = false;

        //set the selected subject
        this.questionsService.setSelectedSubject(this.selectedSubject);

        this.questionsService.getQuestionAndAnswerFromAPI().subscribe((result) => {
            this.questionAnswerArr = JSON.parse(result.data);
            this.questionAnswerArrCopy = this.questionAnswerArr;

            const list = [];
            this.tagsArr = this.questionAnswerArr.filter((item) => {

               if (list.indexOf(item.section) === -1) {
                    list.push(item.section);
                    return true;
                }
            });

            console.log('tags arr...', this.tagsArr);

            //Set the total count
            this.questionsService.setTotalQuesionCount(this.questionAnswerArr.length);

            const pCount = Math.ceil(this.questionAnswerArr.length / this.itemPerPageCount);

            this.pageCount = [];
            for (let i = 0; i < pCount; i++) {
            this.pageCount.push(i + 1);
            }

            this.preparePager(1);
        });
    }

    setSubject(subject) {
        this.selectedSubject = subject;

        this.fetchQuestionAnswers();
    }

    ngOnInit() {
        /*this.questionsService.getQuestionsAndAnswers().subscribe((result) => {
            this.questionAnswerArr = result;*/
        
        this.route.fragment.subscribe((fragmentVal) => {
            console.log("fragmentVal", fragmentVal);

            if (fragmentVal) {
                this.selectedSubject = fragmentVal;
                this.fetchQuestionAnswers();
            } else {
                this.fetchQuestionAnswers();
            }
        });
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

    editQuestion(questionObj) {
        //console.log(questionObj, index);
        const id = questionObj.id;
        this.questionsService.setSelectedQuesion(questionObj, id);
        this.router.navigate(['/questions-answers/new-question'],{fragment: 'edit'});
    }

    filterBySection(section: string= null) {
        if (section) {
            this.isFilteredRes = true;
            const currentResultSet = [...this.questionAnswerArrCopy];

/*             const tagSplitArr= section.split(',');
            const arr = [];
            if(tagSplitArr.length>1) {
                console.log('==========');
                let i =0;
                for(let tagval of tagSplitArr){
                    
                    i++;
                    let aa = _.filter(currentResultSet, { section: tagval});
                    arr.push( aa);

                    console.log('---',tagval,aa);

                    if(tagSplitArr.length === i) {
                        this.questionAnswerArr = arr;
                    }
                }
                
                this.questionAnswerArr =  _.filter(currentResultSet, { section: section});
            } else {
                this.questionAnswerArr =  _.filter(currentResultSet, { section: section});
            } */

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

    getBgColor(subject) {
        if(subject === this.selectedSubject) {
            return {backgroundColor: '#c9c2cc'}
        } else {
            return {backgroundColor: 'transparent'}
        }
    }
}
