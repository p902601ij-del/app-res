import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Reservacion } from '../../models/reservacion.model';
import { ReservacionesService } from '../../services/reservaciones.service';

@Component({
  selector: 'app-reservaciones-db',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reservaciones-db.html',
  styleUrl: './reservaciones-db.scss',
})
export class ReservacionesDb implements OnInit {
  reservaciones = signal<Reservacion[]>([]);
  cargando = signal<boolean>(true);

  constructor(private reservacionesService: ReservacionesService) { }

  private loadReservaciones() {
    this.cargando.set(true);

    this.reservacionesService.getAllReservaciones().subscribe({
      next: (data) => {
        this.reservaciones.set(data);
        this.cargando.set(false);
        console.log('Reservaciones cargadas:', this.reservaciones());
      },
      error: (err) => {
        console.error('Error al cargar reservaciones:', err);
        this.reservaciones.set([]);
        this.cargando.set(false);
      }
    });
  }

  ngOnInit(): void {
    this.loadReservaciones();
  }

  getMonthName(dateStr: string): string {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleString('es-ES', { month: 'short' });
  }

  getDay(dateStr: string): string {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.getDate().toString();
  }

  getYear(dateStr: string): string {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.getFullYear().toString();
  }
}
