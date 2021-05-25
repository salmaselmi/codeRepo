import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsIdentifyComponent } from './projects-identify.component';

describe('ProjectsIdentifyComponent', () => {
  let component: ProjectsIdentifyComponent;
  let fixture: ComponentFixture<ProjectsIdentifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsIdentifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsIdentifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
