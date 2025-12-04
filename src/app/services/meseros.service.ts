import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mesero } from '../models/mesero.model';

@Injectable({
    providedIn: 'root'
})
export class MeserosService {
    private apiURL = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    getAllMeseros(): Observable<Mesero[]> {
        return this.http.get<Mesero[]>(`${this.apiURL}/meseros`);
    }

    getMeseroById(id: number): Observable<Mesero> {
        return this.http.get<Mesero>(`${this.apiURL}/meseros/${id}`);
    }

    saveMesero(mesero: any): Observable<any> {
        return this.http.post(`${this.apiURL}/meseros`, mesero);
    }
}
