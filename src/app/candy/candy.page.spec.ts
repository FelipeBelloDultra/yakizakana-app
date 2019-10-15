import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandyPage } from './candy.page';

describe('CandyPage', () => {
  let component: CandyPage;
  let fixture: ComponentFixture<CandyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
