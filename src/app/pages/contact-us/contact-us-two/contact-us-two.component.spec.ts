import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsTwoComponent } from './contact-us-two.component';

describe('ContactUsTwoComponent', () => {
  let component: ContactUsTwoComponent;
  let fixture: ComponentFixture<ContactUsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUsTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
