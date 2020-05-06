import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericCardsComponent } from './generic-cards.component';

describe('GenericCardsComponent', () => {
  let component: GenericCardsComponent;
  let fixture: ComponentFixture<GenericCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
