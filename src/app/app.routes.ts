import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { EmpleadosForm } from './pages/empleados-form/empleados-form';
import { ReservacionesDb } from './pages/reservaciones-db/reservaciones-db';
import { ReservacionesForm } from './pages/reservaciones-form/reservaciones-form';

export const routes: Routes = [
  {path:"", component: Home},
  {path:"reservaciones", component: ReservacionesForm},
  {path:"empleados", component: EmpleadosForm},
  {path:"", component: Home},
  {path:"**", redirectTo:""}
];
