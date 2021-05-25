import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TunisAddComponent } from './tunis-add.component';

describe('TunisAddComponent', () => {
  let component: TunisAddComponent;
  let fixture: ComponentFixture<TunisAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TunisAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TunisAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
