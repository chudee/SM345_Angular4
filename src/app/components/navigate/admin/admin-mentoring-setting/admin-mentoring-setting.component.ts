import { Component, OnInit } from '@angular/core';

import { AdminMentoringSetting } from '../../../../interfaces/admin-mentoring-setting';
import { AdminMentoringService } from '../../../../services/admin-mentoring/admin-mentoring.service';

@Component({
  selector: 'app-admin-mentoring-setting',
  templateUrl: './admin-mentoring-setting.component.html',
  styleUrls: ['./admin-mentoring-setting.component.css']
})
export class AdminMentoringSettingComponent implements OnInit {
  
  mentoring: AdminMentoringSetting;

  mettingPeriods = [
    { date: 7, text: '7일' },
    { date: 30, text: '30일' },
    { date: 90, text: '학기' },
  ];

  mettingNumbers = [
    { number: 1, text: '1회' },
    { number: 2, text: '2회' },
    { number: 3, text: '3회' },
    { number: 4, text: '4회' },
    { number: 5, text: '5회' },
    { number: 6, text: '6회' },
    { number: 7, text: '7회' },
    { number: 8, text: '8회' },
    { number: 9, text: '9회' },
    { number: 10, text: '10회' },
  ];

  constructor(private adminMentoringService: AdminMentoringService) { }

  ngOnInit() {
    this.getSetting();
  }

  getSetting() {
    this.adminMentoringService
        .getSetting()
        .then(mentoring => {
          this.mentoring = mentoring; console.log(mentoring);})
  }

}
