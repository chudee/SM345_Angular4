import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {

  links = [
    { route: '/dashboard', title: '대시보스', icon: '' },
    { route: '/manual', title: '설명소개서', icon: '' },
    { route: '/notices', title: '공지사항', icon: '' },
    { route: '/mentorings', title: '멘토방', icon: '' },
    { route: '/questions', title: '질문게시판', icon: 'question_answer' },
    { route: '/admin', title: '관리자페이지', icon: '' },
  ]

  constructor() { }

  ngOnInit() {
  }

}
