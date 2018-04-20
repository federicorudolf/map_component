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
  userLat: number;
  userLong: number;
  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
          position => {
              this.userLat = position.coords.latitude;
              this.userLong = position.coords.longitude;
              const marker = new Marcador(this.userLat, this.userLong, 'Ofi', 'cina');
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
    const coordenadas = evento.coords;
    const newMarker = new Marcador(coordenadas.lat, coordenadas.lng, '', '');
    this.marcadores.push(newMarker);
  }
}
