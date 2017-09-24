import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Notice } from '../notice/notice';
import { TestService } from '../../../services/test/test.service';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']
})
export class NoticesComponent implements OnInit {
  notices: Notice[];
  selectedNotice: Notice;

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
        .then(notices => this.notices = notices);
  }

}
