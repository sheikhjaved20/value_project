import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacroOverviewComponent } from './macro-overview.component';

describe('MacroOverviewComponent', () => {
  let component: MacroOverviewComponent;
  let fixture: ComponentFixture<MacroOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacroOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacroOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
