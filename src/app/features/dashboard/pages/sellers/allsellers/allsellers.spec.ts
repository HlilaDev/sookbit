import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Allsellers } from './allsellers';

describe('Allsellers', () => {
  let component: Allsellers;
  let fixture: ComponentFixture<Allsellers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Allsellers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Allsellers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
