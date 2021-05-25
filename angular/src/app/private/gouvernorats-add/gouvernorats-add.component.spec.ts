import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GouvernoratsAddComponent } from './gouvernorats-add.component';

describe('GouvernoratsAddComponent', () => {
  let component: GouvernoratsAddComponent;
  let fixture: ComponentFixture<GouvernoratsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GouvernoratsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GouvernoratsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
