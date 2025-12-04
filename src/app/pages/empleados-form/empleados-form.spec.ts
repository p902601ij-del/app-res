import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosForm } from './empleados-form';

describe('EmpleadosForm', () => {
  let component: EmpleadosForm;
  let fixture: ComponentFixture<EmpleadosForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadosForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadosForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
