import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GouvernoratsListComponent } from './gouvernorats-list.component';

describe('GouvernoratsListComponent', () => {
  let component: GouvernoratsListComponent;
  let fixture: ComponentFixture<GouvernoratsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GouvernoratsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GouvernoratsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
