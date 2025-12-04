import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservacion } from '../models/reservacion.model';

@Injectable({
    providedIn: 'root'
})
export class ReservacionesService {
    private apiURL = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    getAllReservaciones(): Observable<Reservacion[]> {
        return this.http.get<Reservacion[]>(`${this.apiURL}/reservaciones`);
    }

    getReservacionById(id: number): Observable<Reservacion> {
        return this.http.get<Reservacion>(`${this.apiURL}/reservaciones/${id}`);
    }

    saveReservacion(reservacion: any): Observable<any> {
        return this.http.post(`${this.apiURL}/reservaciones`, reservacion);
    }
}
