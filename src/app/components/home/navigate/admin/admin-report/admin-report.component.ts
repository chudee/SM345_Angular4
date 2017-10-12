import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

class Report {
  team: string;
  name: string;
  updated: Date;
  ok: string;
  color: string;
};

@Component({
  selector: 'app-admin-report',
  templateUrl: './admin-report.component.html',
  styleUrls: ['./admin-report.component.css']
})
export class AdminReportComponent implements OnInit {

  reports: Report[] = [
    {
      team: '자바를 잡아',
      name: '3차 모임결과보고서',
      updated: new Date('1/1/16'),
      ok: '확인중',
      color: 'accent',
    },
    {
      team: '썬',
      name: '2차 모임결과보고서',
      updated: new Date('1/17/16'),
      ok: '반려',
      color: 'none'
    },
    {
      team: 'ALGO',
      name: '1차 모임결과보고서',
      updated: new Date('1/28/16'),
      ok: '확인완료',
      color: 'primary'
    }
  ];
  displayedColumns = ['selected', 'ok', 'team', 'name', 'updated'];
  dataSource;

  selectedReports: Report[] = [];

  constructor() { }

  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.reports);
  }

  selectClick(mentoring) {
    const selectedIndex = this.selectedReports.indexOf(mentoring);
    let newSelected = [];

    if(selectedIndex === -1) {
      newSelected = newSelected.concat(this.selectedReports, mentoring);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(this.selectedReports.slice(1));
    } else if (selectedIndex === this.selectedReports.length - 1) {
      newSelected = newSelected.concat(this.selectedReports.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        this.selectedReports.slice(0, selectedIndex),
        this.selectedReports.slice(selectedIndex + 1),
      );
    }
    this.selectedReports = newSelected;
  }

  selectAllClick(reports) {
    const length = this.selectedReports.length;
    this.isSelected(reports);
    if(length === 0) {
      reports.map(mentoring => this.selectedReports.push(mentoring));
      return;
    } else if(length === reports.length) {
      this.selectedReports = [];
    } else {
      this.selectedReports = [];
      reports.map(mentoring => this.selectedReports.push(mentoring));
    }
  }

  isSelected = mentoring => this.selectedReports.indexOf(mentoring) !== -1;

}

export class ExampleDataSource extends DataSource<any> {
  constructor(
    private reports: any
  ) { 
    super()
  }
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Report[]> {
    return Observable.of(this.reports);
  }
  
  disconnect() {}
}