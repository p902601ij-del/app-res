import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservacionesForm } from './reservaciones-form';

describe('ReservacionesForm', () => {
  let component: ReservacionesForm;
  let fixture: ComponentFixture<ReservacionesForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservacionesForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservacionesForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
