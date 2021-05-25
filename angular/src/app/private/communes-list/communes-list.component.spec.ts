import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunesListComponent } from './communes-list.component';

describe('CommunesListComponent', () => {
  let component: CommunesListComponent;
  let fixture: ComponentFixture<CommunesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
