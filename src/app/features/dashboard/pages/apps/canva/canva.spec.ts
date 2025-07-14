import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Canva } from './canva';

describe('Canva', () => {
  let component: Canva;
  let fixture: ComponentFixture<Canva>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Canva]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Canva);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
