import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Capcut } from './capcut';

describe('Capcut', () => {
  let component: Capcut;
  let fixture: ComponentFixture<Capcut>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Capcut]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Capcut);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
