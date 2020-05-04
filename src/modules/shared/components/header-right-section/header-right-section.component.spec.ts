import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRightSectionComponent } from './header-right-section.component';

describe('HeaderRightSectionComponent', () => {
  let component: HeaderRightSectionComponent;
  let fixture: ComponentFixture<HeaderRightSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderRightSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderRightSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
