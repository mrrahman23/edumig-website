import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsMarqueeComponent } from './clients-marquee.component';

describe('ClientsMarqueeComponent', () => {
  let component: ClientsMarqueeComponent;
  let fixture: ComponentFixture<ClientsMarqueeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientsMarqueeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsMarqueeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
