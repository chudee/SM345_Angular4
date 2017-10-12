import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMentoringSettingComponent } from './admin-mentoring-setting.component';

describe('AdminMentoringSettingComponent', () => {
  let component: AdminMentoringSettingComponent;
  let fixture: ComponentFixture<AdminMentoringSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMentoringSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMentoringSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
