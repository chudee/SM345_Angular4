import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Notice } from '../../../../interfaces/notice';
import { TestService } from '../../../../services/test/test.service';


@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']
})
export class NoticesComponent implements OnInit {
  notices: Notice[];
  selectedNotice: Notice;
  displayedColumns = ['selected', 'id', 'title', 'date'];
  dataSource;

  selectedNotices: Notice[] = [];

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

  selectClick(notice) {
    const selectedIndex = this.selectedNotices.indexOf(notice);
    let newSelected = [];

    if(selectedIndex === -1) {
      newSelected = newSelected.concat(this.selectedNotices, notice);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(this.selectedNotices.slice(1));
    } else if (selectedIndex === this.selectedNotices.length - 1) {
      newSelected = newSelected.concat(this.selectedNotices.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        this.selectedNotices.slice(0, selectedIndex),
        this.selectedNotices.slice(selectedIndex + 1),
      );
    }
    this.selectedNotices = newSelected;
  }

  selectAllClick(notices) {
    const length = this.selectedNotices.length;
    this.isSelected(notices);
    if(length === 0) {
      notices.map(notice => this.selectedNotices.push(notice));
      return;
    } else if(length === notices.length) {
      this.selectedNotices = [];
    } else {
      this.selectedNotices = [];
      notices.map(notice => this.selectedNotices.push(notice));
    }
  }

  isSelected = notice => this.selectedNotices.indexOf(notice) !== -1;

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