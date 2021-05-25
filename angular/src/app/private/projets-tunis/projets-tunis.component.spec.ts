import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetsTunisComponent } from './projets-tunis.component';

describe('ProjetsTunisComponent', () => {
  let component: ProjetsTunisComponent;
  let fixture: ComponentFixture<ProjetsTunisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetsTunisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetsTunisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
