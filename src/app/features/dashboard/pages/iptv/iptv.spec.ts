import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iptv } from './iptv';

describe('Iptv', () => {
  let component: Iptv;
  let fixture: ComponentFixture<Iptv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Iptv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Iptv);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
