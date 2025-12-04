import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosDb } from './empleados-db';

describe('EmpleadosDb', () => {
  let component: EmpleadosDb;
  let fixture: ComponentFixture<EmpleadosDb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadosDb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadosDb);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
