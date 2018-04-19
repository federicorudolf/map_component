import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = [];
  title = 'Mapa';
  lat = 0;
  long = 0;
  constructor() {
    const nuevoMarcador = new Marcador(this.lat, this.long, 'Hola', '');
    this.marcadores.push(nuevoMarcador);
  }

  ngOnInit() {
    setTimeout(() => {
      if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
          position => {
              this.lat = position.coords.latitude;
              this.long = position.coords.longitude;
              const marker = new Marcador(this.lat, this.long, 'Ofi', 'cina');
              this.marcadores.push(marker);
          },
          error => {
              switch (error.code) {
                  case 1:
                      console.log('Permission Denied');
                      break;
                  case 2:
                      console.log('Position Unavailable');
                      break;
                  case 3:
                      console.log('Timeout');
                      break;
              }
          }
        );
      }
    }, 2500);

    console.log('hola');

  }

  agregarMarcador( evento ) {
    const coordenadas: {
      latitude: number,
      longitude: number
    } = evento.coords;
    const newMarker = new Marcador(coordenadas.latitude, coordenadas.longitude, '', '');
    this.marcadores.push(newMarker);
  }
}
