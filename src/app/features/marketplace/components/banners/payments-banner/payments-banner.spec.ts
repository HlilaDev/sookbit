import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsBanner } from './payments-banner';

describe('PaymentsBanner', () => {
  let component: PaymentsBanner;
  let fixture: ComponentFixture<PaymentsBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentsBanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentsBanner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
