import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSurveyResultComponent } from './admin-survey-result.component';

describe('AdminSurveyResultComponent', () => {
  let component: AdminSurveyResultComponent;
  let fixture: ComponentFixture<AdminSurveyResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSurveyResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSurveyResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
