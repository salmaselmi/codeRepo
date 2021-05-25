import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartiersListComponent } from './quartiers-list.component';

describe('QuartiersListComponent', () => {
  let component: QuartiersListComponent;
  let fixture: ComponentFixture<QuartiersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuartiersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartiersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
