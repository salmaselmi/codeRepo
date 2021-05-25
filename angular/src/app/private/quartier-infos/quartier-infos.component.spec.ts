import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartierInfosComponent } from './quartier-infos.component';

describe('QuartierInfosComponent', () => {
  let component: QuartierInfosComponent;
  let fixture: ComponentFixture<QuartierInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuartierInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartierInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
