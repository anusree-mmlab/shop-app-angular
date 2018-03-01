import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { QuestionsService } from '../questions.service';

@Component({
    selector : 'app-new-question',
    templateUrl: './newquestion.component.html',
    styleUrls:['./newquestion.css']
})
export class NewQuestionComponent implements OnInit {

    public QAForm: FormGroup;
    public isSubmit: boolean = false;
    public isEdit: boolean =false;

    constructor(
       private questionsService: QuestionsService,
       private route : ActivatedRoute,
       private router : Router
    
    ) {
        this.QAForm = new FormGroup({
            'section': new FormControl(null, [Validators.required]),
            'question': new FormControl(null, [Validators.required]),
            'answer': new FormControl(null, [Validators.required])
        });

    }

    ngOnInit() {
        console.log('---', this.questionsService.selectedQuestion, this.questionsService.selectedQuestionIndex);

        this.route.fragment.subscribe((fragmnt) => {
            if (fragmnt === 'edit') {
                this.isEdit = true;
                this.QAForm = new FormGroup({
                    'section': new FormControl(this.questionsService.selectedQuestion.section, [Validators.required]),
                    'question': new FormControl(this.questionsService.selectedQuestion.question, [Validators.required]),
                    'answer': new FormControl(this.questionsService.selectedQuestion.answer.join('\n'), [Validators.required])
                });
            }
        });
    }

    setSubmitFalse() {
        this.isSubmit = false;
    }

    onFormSubmit() {
        this.isSubmit = true;
        console.log('Form is submitted', this.QAForm);

       /*  setTimeout(() => {
            this.isSubmit = false;
        }, 4000); */

        if (this.QAForm.valid && this.isEdit === false) {
            //this.QAForm.value
            console.log(this.QAForm.value);
            const valueObj = this.QAForm.value;
            const newquestionObj = {
                 id: this.questionsService.totalQuestioncount+1,
                 section: valueObj.section,
                 question: valueObj.question,
                 answer: valueObj.answer.split("\n")};
            //console.log(valueObj.answer.split("\n"));
            this.questionsService.appendNewQuestionToFile(newquestionObj);

            setTimeout(() => {
                this.router.navigate(['/questions-answers'],{fragment:this.questionsService.selectedSubject});
            }, 1000);
        } else if (this.QAForm.valid && this.isEdit === true) {
            //this.QAForm.value
            console.log(this.QAForm.value);
            const valueObj = this.QAForm.value;
            const questionObj = {
                id: this.questionsService.selectedQuestionIndex,
                section: valueObj.section,
                question: valueObj.question,
                answer: valueObj.answer.split("\n")};

            this.questionsService.editQuestionInFile(questionObj, this.questionsService.selectedQuestionIndex);
            
            setTimeout(() => {
                this.router.navigate(['/questions-answers'],{fragment:this.questionsService.selectedSubject});
            }, 1000);
        }
    }
}