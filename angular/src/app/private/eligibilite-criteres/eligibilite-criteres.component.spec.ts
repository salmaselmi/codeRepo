import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibiliteCriteresComponent } from './eligibilite-criteres.component';

describe('EligibiliteCriteresComponent', () => {
  let component: EligibiliteCriteresComponent;
  let fixture: ComponentFixture<EligibiliteCriteresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligibiliteCriteresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EligibiliteCriteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
