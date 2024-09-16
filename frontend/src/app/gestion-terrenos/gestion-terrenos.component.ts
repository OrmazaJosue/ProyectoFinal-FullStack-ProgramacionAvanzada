import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

interface SolicitudAprobada {
  _id: string;
  nombre: string;
  apellido: string;
  numeroCedula: string;
  ciudad: string;
  correoElectronico: string;
  documentosAdjuntos: string;
  estadoRegistro: 'Pendiente' | 'Aprobado' | 'Desaprobado';
}

@Component({
  selector: 'app-gestion-terrenos',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, RouterLink, HttpClientModule],
  templateUrl: './gestion-terrenos.component.html',
  styleUrl: './gestion-terrenos.component.css'
})
export class GestionTerrenosComponent implements OnInit {

  solicitudesAprobadas: SolicitudAprobada[] = []; // Aquí se almacenan las solicitudes obtenidas desde la API

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.getSolicitudesAprobadas(); // Llamamos a la función para cargar los datos al iniciar el componente
  }

  // Función para obtener los datos desde la API
  getSolicitudesAprobadas(): void {
    this.http.get<SolicitudAprobada[]>('http://localhost:3001/api/verificar/solicitudes-aprobadas').subscribe({
      next: (data) => {
        this.solicitudesAprobadas = data; // Guardar los datos en la propiedad del componente
      },
      error: (err) => {
        console.error('Error al obtener las solicitudes aprobadas', err);
      }
    });
  }

  // Función para ver el documento adjunto
  verDocumentoAdjunto(solicitud: SolicitudAprobada) {
    if (solicitud.documentosAdjuntos) {
      // Aquí puedes redirigir o abrir el documento adjunto
      window.open(solicitud.documentosAdjuntos, '_blank');
    } else {
      alert('No ha cargado documentos.');
    }
  }

  goBack() {
    this.router.navigate(['/nav']); // Navega a la página principal
  }
}
