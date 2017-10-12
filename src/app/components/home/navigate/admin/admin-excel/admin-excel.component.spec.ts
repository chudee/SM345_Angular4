import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExcelComponent } from './admin-excel.component';

describe('AdminExcelComponent', () => {
  let component: AdminExcelComponent;
  let fixture: ComponentFixture<AdminExcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminExcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
