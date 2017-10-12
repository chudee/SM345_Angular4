import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMentoringComponent } from './admin-mentoring.component';

describe('AdminMentoringComponent', () => {
  let component: AdminMentoringComponent;
  let fixture: ComponentFixture<AdminMentoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMentoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMentoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
