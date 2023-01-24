import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SequenceMatchingComponent } from './sequence-matching.component';

describe('SequenceMatchingComponent', () => {
  let component: SequenceMatchingComponent;
  let fixture: ComponentFixture<SequenceMatchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SequenceMatchingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SequenceMatchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
