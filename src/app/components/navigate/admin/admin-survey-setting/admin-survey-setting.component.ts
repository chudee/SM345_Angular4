import { Component, OnInit, Inject} from '@angular/core';

class survey {
  title: string;
}

@Component({
  selector: 'app-admin-survey-setting',
  templateUrl: './admin-survey-setting.component.html',
  styleUrls: ['./admin-survey-setting.component.css']
})
export class AdminSurveySettingComponent implements OnInit {

  surveys: survey[] = [
    { title: '멘토링 굿' },
  ];

  constructor() { }

  ngOnInit() {
    this.getSurveys();
  }

  addSurvey(e) {
    this.surveys.push(e.target.value);
  }

  getSurveys() {
    return this.surveys;
  }
}
