import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {

  links = [
    { route: '/dashboard', title: '대시보스', icon: 'dashboard'},
    { route: '/manual', title: '설명소개서', icon: 'info' },
    { route: '/notices', title: '공지사항', icon: 'help' },
    { route: '/mentorings', title: '멘토방', icon: 'group_work' },
    { route: '/questions', title: '질문게시판', icon: 'question_answer' },
    { route: '/admin', title: '관리자페이지', icon: 'settings' },
  ]

  constructor() { }

  ngOnInit() {

  }
}
