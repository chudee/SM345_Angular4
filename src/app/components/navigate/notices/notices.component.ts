import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Notice } from '../../../interfaces/notice';
import { TestService } from '../../../services/test/test.service';


@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']
})
export class NoticesComponent implements OnInit {
  notices: Notice[];
  selectedNotice: Notice;
  displayedColumns = ['id', 'title', 'date'];
  dataSource;

  constructor(
    private testService: TestService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getNotices();
  }

  getNotices(): void {
    this.testService
        .getNotices()
        .then(notices => {
          this.notices = notices
          this.dataSource = new ExampleDataSource(notices);
        });
  }

}


export class ExampleDataSource extends DataSource<any> {
  constructor(
    private notices: any
  ) { 
    super()
  }
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Notice[]> {
    return Observable.of(this.notices);
  }
  
  disconnect() {}
}