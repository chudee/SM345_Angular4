import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSurveySettingComponent } from './admin-survey-setting.component';

describe('AdminSurveySettingComponent', () => {
  let component: AdminSurveySettingComponent;
  let fixture: ComponentFixture<AdminSurveySettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSurveySettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSurveySettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
