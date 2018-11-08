import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseModalDialogComponent } from './course-modal-dialog.component';

describe('CourseModalDialogComponent', () => {
  let component: CourseModalDialogComponent;
  let fixture: ComponentFixture<CourseModalDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseModalDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseModalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
