import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Mentoring } from '../../../interfaces/mentoring';
import { TestService } from '../../../services/test/test.service';

@Component({
  selector: 'app-mentoring-details',
  templateUrl: './mentoring-details.component.html',
  styleUrls: ['./mentoring-details.component.css']
})
export class MentoringDetailsComponent implements OnInit {
  id: number;
  mentoring: Mentoring;
  private mantoringUrl = 'api/mentorings'

  constructor(
    private route: ActivatedRoute,
    private testService: TestService
  ) { 
    this.id = route.snapshot.params['id']; 
  }

  ngOnInit() {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.testService.getMentoring(+params.get('id')))
    .subscribe(mentoring => this.mentoring = mentoring);
  }
  reports = [
    {
      name: '3차 모임결과보고서',
      updated: new Date('1/1/16'),
      ok: '확인중',
      color: 'accent',
    },
    {
      name: '2차 모임결과보고서',
      updated: new Date('1/17/16'),
      ok: '반려',
      color: 'none'
    },
    {
      name: '1차 모임결과보고서',
      updated: new Date('1/28/16'),
      ok: '확인완료',
      color: 'primary'
    }
  ];
}
