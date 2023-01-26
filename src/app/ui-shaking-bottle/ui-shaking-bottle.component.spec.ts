import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiShakingBottleComponent } from './ui-shaking-bottle.component';

describe('UiShakingBottleComponent', () => {
  let component: UiShakingBottleComponent;
  let fixture: ComponentFixture<UiShakingBottleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiShakingBottleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiShakingBottleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
