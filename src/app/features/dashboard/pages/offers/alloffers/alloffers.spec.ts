import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alloffers } from './alloffers';

describe('Alloffers', () => {
  let component: Alloffers;
  let fixture: ComponentFixture<Alloffers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alloffers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Alloffers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
