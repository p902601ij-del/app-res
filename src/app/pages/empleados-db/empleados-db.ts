import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mesero } from '../../models/mesero.model';
import { MeserosService } from '../../services/meseros.service';

@Component({
  selector: 'app-empleados-db',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empleados-db.html',
  styleUrl: './empleados-db.scss',
})
export class EmpleadosDb implements OnInit {
  empleados = signal<Mesero[]>([]);
  cargando = signal<boolean>(true);

  constructor(private meserosService: MeserosService) { }

  private loadEmpleados() {
    this.cargando.set(true);

    this.meserosService.getAllMeseros().subscribe({
      next: (data) => {
        this.empleados.set(data);
        this.cargando.set(false);
        console.log('Empleados cargados:', this.empleados());
      },
      error: (err) => {
        console.error('Error al cargar empleados:', err);
        this.empleados.set([]);
        this.cargando.set(false);
      }
    });
  }

  ngOnInit(): void {
    this.loadEmpleados();
  }
}
