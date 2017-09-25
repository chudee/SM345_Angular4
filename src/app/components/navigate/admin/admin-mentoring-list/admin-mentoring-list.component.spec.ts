import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMentoringListComponent } from './admin-mentoring-list.component';

describe('AdminMentoringListComponent', () => {
  let component: AdminMentoringListComponent;
  let fixture: ComponentFixture<AdminMentoringListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMentoringListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMentoringListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
