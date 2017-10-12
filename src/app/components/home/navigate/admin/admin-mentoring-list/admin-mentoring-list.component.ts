import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Mentoring } from '../../../../../interfaces/mentoring';
import { TestService } from '../../../../../services/test/test.service';

@Component({
  selector: 'app-admin-mentoring-list',
  templateUrl: './admin-mentoring-list.component.html',
  styleUrls: ['./admin-mentoring-list.component.css']
})
export class AdminMentoringListComponent implements OnInit {
  mentorings: Mentoring[];
  displayedColumns = ['selected', 'id', 'team', 'title', 'subTitle', 'people', 'open'];
  dataSource;

  selectedMentorings: Mentoring[] = [];
  
  constructor(
    private router: Router,
    private testService: TestService
  ) { }

  ngOnInit() {
    this.getMentorings();
  }

  getMentorings() {
    this.testService
    .getMentorings()
    .then(mentorings => {
      this.mentorings = mentorings
      this.dataSource = new ExampleDataSource(this.mentorings);
    });
  }

  selectClick(mentoring) {
    const selectedIndex = this.selectedMentorings.indexOf(mentoring);
    let newSelected = [];

    if(selectedIndex === -1) {
      newSelected = newSelected.concat(this.selectedMentorings, mentoring);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(this.selectedMentorings.slice(1));
    } else if (selectedIndex === this.selectedMentorings.length - 1) {
      newSelected = newSelected.concat(this.selectedMentorings.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        this.selectedMentorings.slice(0, selectedIndex),
        this.selectedMentorings.slice(selectedIndex + 1),
      );
    }
    this.selectedMentorings = newSelected;
  }

  selectAllClick(mentorings) {
    const length = this.selectedMentorings.length;
    this.isSelected(mentorings);
    if(length === 0) {
      mentorings.map(mentoring => this.selectedMentorings.push(mentoring));
      return;
    } else if(length === mentorings.length) {
      this.selectedMentorings = [];
    } else {
      this.selectedMentorings = [];
      mentorings.map(mentoring => this.selectedMentorings.push(mentoring));
    }
  }

  isSelected = mentoring => this.selectedMentorings.indexOf(mentoring) !== -1;

}

export class ExampleDataSource extends DataSource<any> {
  constructor(
    private mentorings: any
  ) { 
    super()
  }
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Mentoring[]> {
    return Observable.of(this.mentorings);
  }
  
  disconnect() {}
}