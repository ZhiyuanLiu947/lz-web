import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiThemeListComponent } from './ui-theme-list.component';

describe('UiThemeListComponent', () => {
  let component: UiThemeListComponent;
  let fixture: ComponentFixture<UiThemeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiThemeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiThemeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
