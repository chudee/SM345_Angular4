import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AdminMentoringSetting } from '../../../../../interfaces/admin-mentoring-setting';
import { AdminMentoringService } from '../../../../../services/admin-mentoring/admin-mentoring.service';

@Component({
  selector: 'app-admin-mentoring-setting',
  templateUrl: './admin-mentoring-setting.component.html',
  styleUrls: ['./admin-mentoring-setting.component.css']
})
export class AdminMentoringSettingComponent implements OnInit {
  
  mentoringSetting: AdminMentoringSetting;

  mentorNumbers = [
    { number: 10, text: '10명' },
    { number: 15, text: '15명' },
    { number: 20, text: '20명' },
    { number: 25, text: '25명' },
    { number: 30, text: '30명' },
  ];

  menteeNumbers = [
    { number: 3, text: '3명' },
    { number: 4, text: '4명' },
    { number: 5, text: '5명' },
    { number: 6, text: '6명' },
    { number: 7, text: '7명' },
    { number: 8, text: '8명' },
    { number: 9, text: '9명' },
    { number: 10, text: '10명' },
  ];

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

  constructor(
    private adminMentoringService: AdminMentoringService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getSetting();
  }

  getSetting() {
    this.adminMentoringService
        .getSetting()
        .then(mentoringSetting => this.mentoringSetting = mentoringSetting)
  }
  
  initMentorStartDate() {
    if(this.mentoringSetting){
      return new Date(this.mentoringSetting[0].mentor.startDate);
    }
  }

  initMentorEndDate() {
    if(this.mentoringSetting){
      return new Date(this.mentoringSetting[0].mentor.endDate);
    }
  }

  initMenteeStartDate() {
    if(this.mentoringSetting){
      return new Date(this.mentoringSetting[0].mentee.startDate);
    }
  }

  initMenteeEndDate() {
    if(this.mentoringSetting){
      return new Date(this.mentoringSetting[0].mentee.endDate);
    }
  }

  changeMentorStartDate(e) {
    if(this.mentoringSetting){
      this.mentoringSetting[0].mentor.startDate = e.value;
    }
  }

  changeMentorEndDate(e) {
    if(this.mentoringSetting){
      this.mentoringSetting[0].mentor.endDate = e.value;
    }
  }

  changeMenteeStartDate(e) {
    if(this.mentoringSetting){
      this.mentoringSetting[0].mentee.startDate = e.value;
    }
  }

  changeMenteeEndDate(e) {
    if(this.mentoringSetting){
      this.mentoringSetting[0].mentee.endDate = e.value;
    }
  }

  initMentorNumber() {
    if(this.mentoringSetting){
      return this.mentoringSetting[0].mentor.maxNumber;
    }
  }
  
  changeMentorNumber(e) {
    if(this.mentoringSetting){
        this.mentoringSetting[0].mentor.maxNumber = e.value;
    }
  }

  initMenteeNumber() {
    if(this.mentoringSetting){
      return this.mentoringSetting[0].mentee.maxNumber;
    }
  }
  
  changeMenteeNumber(e) {
    if(this.mentoringSetting){
        this.mentoringSetting[0].mentee.maxNumber = e.value;
    }
  }

  initPeriod() {
    if(this.mentoringSetting){
      return this.mentoringSetting[0].room.period;
    }
  }
  
  changePeriod(e) {
    if(this.mentoringSetting){
        this.mentoringSetting[0].room.period = e.value;
    }
  }

  initCount() {
    if(this.mentoringSetting){
      return this.mentoringSetting[0].room.count;
    }
  }

  changeCount(e) {
    if(this.mentoringSetting){
      this.mentoringSetting[0].room.count = e.value;
    }
  }

  save(): void {
    this.adminMentoringService.update(this.mentoringSetting[0])
    .then(() => alert("설정이 변경되었습니다."))
    .catch(() => alert("설정에 실패하였습니다."));
  }

}
