import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseOneComponent } from './course-one.component';

describe('CourseOneComponent', () => {
  let component: CourseOneComponent;
  let fixture: ComponentFixture<CourseOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
