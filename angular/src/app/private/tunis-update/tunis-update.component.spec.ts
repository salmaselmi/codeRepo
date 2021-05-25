import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TunisUpdateComponent } from './tunis-update.component';

describe('TunisUpdateComponent', () => {
  let component: TunisUpdateComponent;
  let fixture: ComponentFixture<TunisUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TunisUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TunisUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
