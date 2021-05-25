import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemasFinComponent } from './schemas-fin.component';

describe('SchemasFinComponent', () => {
  let component: SchemasFinComponent;
  let fixture: ComponentFixture<SchemasFinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemasFinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemasFinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
