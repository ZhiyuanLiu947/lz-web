import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiClockRibbonComponent } from './ui-clock-ribbon.component';

describe('UiClockRibbonComponent', () => {
  let component: UiClockRibbonComponent;
  let fixture: ComponentFixture<UiClockRibbonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiClockRibbonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiClockRibbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
