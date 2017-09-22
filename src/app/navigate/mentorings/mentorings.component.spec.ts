import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentoringsComponent } from './mentorings.component';

describe('MentoringsComponent', () => {
  let component: MentoringsComponent;
  let fixture: ComponentFixture<MentoringsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentoringsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentoringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
