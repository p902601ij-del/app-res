import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservacionesDb } from './reservaciones-db';

describe('ReservacionesDb', () => {
  let component: ReservacionesDb;
  let fixture: ComponentFixture<ReservacionesDb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservacionesDb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservacionesDb);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
