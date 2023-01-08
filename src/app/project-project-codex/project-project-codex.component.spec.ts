import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectProjectCodexComponent } from './project-project-codex.component';

describe('ProjectProjectCodexComponent', () => {
  let component: ProjectProjectCodexComponent;
  let fixture: ComponentFixture<ProjectProjectCodexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectProjectCodexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectProjectCodexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
