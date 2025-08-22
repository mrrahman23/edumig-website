import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListTwoComponent } from './courses-list-two.component';

describe('CoursesListTwoComponent', () => {
  let component: CoursesListTwoComponent;
  let fixture: ComponentFixture<CoursesListTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesListTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesListTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
