import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunesAddComponent } from './communes-add.component';

describe('CommunesAddComponent', () => {
  let component: CommunesAddComponent;
  let fixture: ComponentFixture<CommunesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
