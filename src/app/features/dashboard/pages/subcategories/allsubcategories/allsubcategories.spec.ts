import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Allsubcategories } from './allsubcategories';

describe('Allsubcategories', () => {
  let component: Allsubcategories;
  let fixture: ComponentFixture<Allsubcategories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Allsubcategories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Allsubcategories);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
