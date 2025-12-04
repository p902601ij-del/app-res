import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReservacionesDb } from '../reservaciones-db/reservaciones-db';
import { ReservacionesService } from '../../services/reservaciones.service';
import { Reservacion } from '../../models/reservacion.model';

@Component({
  selector: 'app-reservaciones-form',
  imports: [ReservacionesDb, CommonModule, FormsModule],
  templateUrl: './reservaciones-form.html',
  styleUrl: './reservaciones-form.scss',
})
export class ReservacionesForm {
  // Modelo para el formulario
  reservacion: Reservacion = {
    Nombre_completo: '',
    Telefono: '',
    Fecha: '',
    Hora: '',
    Numero_de_personas: 2,
    Notas_adicionales: ''
  };

  constructor(private reservacionesService: ReservacionesService) { }

  guardarReservacion() {
    this.reservacionesService.saveReservacion(this.reservacion).subscribe({
      next: (response) => {
        console.log('Reservación guardada:', response);
        alert('¡Reservación guardada exitosamente!');
        // Limpiar formulario
        this.limpiarFormulario();
        // Recargar la página para actualizar la tabla
        window.location.reload();
      },
      error: (err) => {
        console.error('Error al guardar reservación:', err);
        alert('Error al guardar la reservación. Por favor intenta de nuevo.');
      }
    });
  }

  limpiarFormulario() {
    this.reservacion = {
      Nombre_completo: '',
      Telefono: '',
      Fecha: '',
      Hora: '',
      Numero_de_personas: 2,
      Notas_adicionales: ''
    };
  }
}
