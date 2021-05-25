import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartiersAddComponent } from './quartiers-add.component';

describe('QuartiersAddComponent', () => {
  let component: QuartiersAddComponent;
  let fixture: ComponentFixture<QuartiersAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuartiersAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartiersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
