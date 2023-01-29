import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoGameAiComponent } from './go-game-ai.component';

describe('GoGameAiComponent', () => {
  let component: GoGameAiComponent;
  let fixture: ComponentFixture<GoGameAiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoGameAiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoGameAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
