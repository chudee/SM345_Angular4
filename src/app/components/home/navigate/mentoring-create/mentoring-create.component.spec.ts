import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentoringCreateComponent } from './mentoring-create.component';

describe('MentoringCreateComponent', () => {
  let component: MentoringCreateComponent;
  let fixture: ComponentFixture<MentoringCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentoringCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentoringCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
