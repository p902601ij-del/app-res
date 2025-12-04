export interface Reservacion {
    ID_reservacion?: number;
    Nombre_completo: string;
    Telefono: string;
    Fecha: string;
    Hora: string;
    Numero_de_personas: number;
    Notas_adicionales: string | null;
}
