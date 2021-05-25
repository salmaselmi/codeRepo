import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TunisInfoComponent } from './tunis-info.component';

describe('TunisInfoComponent', () => {
  let component: TunisInfoComponent;
  let fixture: ComponentFixture<TunisInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TunisInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TunisInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
