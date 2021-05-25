import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BailleursComponent } from './bailleurs.component';

describe('BailleursComponent', () => {
  let component: BailleursComponent;
  let fixture: ComponentFixture<BailleursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BailleursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BailleursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
