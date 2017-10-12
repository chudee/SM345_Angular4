import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentoringDetailsComponent } from './mentoring-details.component';

describe('MentoringDetailsComponent', () => {
  let component: MentoringDetailsComponent;
  let fixture: ComponentFixture<MentoringDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentoringDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentoringDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
