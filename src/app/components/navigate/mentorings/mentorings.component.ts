import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Mentoring } from '../../../interfaces/mentoring';
import { TestService } from '../../../services/test/test.service';
import { AdminMentoringSetting } from '../../../interfaces/admin-mentoring-setting';
import { AdminMentoringService } from '../../../services/admin-mentoring/admin-mentoring.service';

@Component({
  selector: 'app-mentorings',
  templateUrl: './mentorings.component.html',
  styleUrls: ['./mentorings.component.css']
})
export class MentoringsComponent implements OnInit {
  mentorings: Mentoring[];
  selectedMentoring: Mentoring;
  setting: AdminMentoringSetting;

  constructor(
    private router: Router,
    private testService: TestService,
    private adminMentoringService: AdminMentoringService
  ) { }

  ngOnInit() {
    this.getMentorings();
    this.getMentoringSetting();
    this.onDate();
  }

  getMentorings(): void {
    this.testService
        .getMentorings()
        .then(mentorings => this.mentorings = mentorings)
  }

  getMentoringSetting(): void {
    this.adminMentoringService
        .getSetting()
        .then(setting => {this.setting = setting[0]; console.log(setting[0])});
  }

  onDate() {
    if(this.setting) {
      let eDate = new Date(this.setting.mentor.endDate);
      let endYear = eDate.getFullYear();
      let endMonth = eDate.getMonth();
      let endDate = eDate.getDate();
      
      let sDate =  new Date(this.setting.mentor.startDate);
      let startYear = sDate.getFullYear();
      let startMonth = sDate.getMonth();
      let startDate = sDate.getDate();

      let endResult = `${endYear}${endMonth}${endDate}`;
      let startResult = `${startYear}${startMonth}${startDate}`;
      // let result = parseInt(endResult)-parseInt(startResult);
      let result = 1;

      if(result > 0) {
        return true;
      } 
      return false;
    }
  }

}
