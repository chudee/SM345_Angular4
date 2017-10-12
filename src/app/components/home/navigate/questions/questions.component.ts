import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Question } from '../../../../interfaces/question';
import { TestService } from '../../../../services/test/test.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions: Question[];
  selectedQuestion: Question;
  displayedColumns = ['id', 'title', 'author', 'date', 'views'];
  dataSource;

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
        .then(questions => {
          this.questions = questions;
          this.dataSource = new ExampleDataSource(questions);
        });
  }

}

export class ExampleDataSource extends DataSource<any> {
  constructor(
    private questions: any
  ) { 
    super()
  }
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Question[]> {
    return Observable.of(this.questions);
  }
  
  disconnect() {}
}