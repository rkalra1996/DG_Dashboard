import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighchartsDonoughtComponent } from './highcharts-donought.component';

describe('HighchartsDonoughtComponent', () => {
  let component: HighchartsDonoughtComponent;
  let fixture: ComponentFixture<HighchartsDonoughtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighchartsDonoughtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighchartsDonoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
