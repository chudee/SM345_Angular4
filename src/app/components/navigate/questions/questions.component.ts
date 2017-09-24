import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Question } from '../questions/question';
import { TestService } from '../../../services/test/test.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions: Question[];
  selectedQuestion: Question;

  constructor(
    private router: Router,
    private testService: TestService
  ) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions(): void {
    this.testService
        .getQuestions()
        .then(questions => this.questions = questions);
  }

}
