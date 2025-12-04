import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmpleadosDb } from '../empleados-db/empleados-db';
import { MeserosService } from '../../services/meseros.service';
import { Mesero } from '../../models/mesero.model';

@Component({
  selector: 'app-empleados-form',
  imports: [EmpleadosDb, CommonModule, FormsModule],
  templateUrl: './empleados-form.html',
  styleUrl: './empleados-form.scss',
})
export class EmpleadosForm {
  // Modelo para el formulario
  empleado: Mesero = {
    Nombre: '',
    Apellidos: '',
    Telefono: '',
    Horario: '',
    Salario_mensual: 0
  };

  constructor(private meserosService: MeserosService) { }

  guardarEmpleado() {
    this.meserosService.saveMesero(this.empleado).subscribe({
      next: (response) => {
        console.log('Empleado guardado:', response);
        alert('¡Empleado guardado exitosamente!');
        // Limpiar formulario
        this.limpiarFormulario();
        // Recargar la página para actualizar la tabla
        window.location.reload();
      },
      error: (err) => {
        console.error('Error al guardar empleado:', err);
        alert('Error al guardar el empleado. Por favor intenta de nuevo.');
      }
    });
  }

  limpiarFormulario() {
    this.empleado = {
      Nombre: '',
      Apellidos: '',
      Telefono: '',
      Horario: '',
      Salario_mensual: 0
    };
  }
}
