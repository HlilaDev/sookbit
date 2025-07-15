import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Netflix } from './netflix';

describe('Netflix', () => {
  let component: Netflix;
  let fixture: ComponentFixture<Netflix>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Netflix]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Netflix);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
