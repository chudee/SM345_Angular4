import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Mentoring } from '../../../interfaces/mentoring';
import { TestService } from '../../../services/test/test.service';

@Component({
  selector: 'app-mentorings',
  templateUrl: './mentorings.component.html',
  styleUrls: ['./mentorings.component.css']
})
export class MentoringsComponent implements OnInit {
  mentorings: Mentoring[];
  selectedMentoring: Mentoring;

  constructor(
    private router: Router,
    private testService: TestService
  ) { }

  ngOnInit() {
    this.getMentorings();
  }

  getMentorings(): void {
    this.testService
        .getMentorings()
        .then(mentorings => this.mentorings = mentorings)
  }

}
