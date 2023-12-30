import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],

})
export class MapComponent  implements OnInit {
  lat: number=0;
  lng: number=0;
  marker: mapboxgl.Marker | undefined; 

  constructor(private route: ActivatedRoute) {}

  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.lat = this.parseCoordinate(params['lat'], -33.452095);
      this.lng = this.parseCoordinate(params['lng'], -70.663362);
      this.initMap();
    });
  }

  private parseCoordinate(coord: any, defaultValue: number): number {
    const parsedCoord = Number(coord);
    return isNaN(parsedCoord) ? defaultValue : parsedCoord;
  }

  initMap() {
    (mapboxgl as typeof mapboxgl).accessToken = 'pk.eyJ1Ijoic29sZGllcmhlYWQiLCJhIjoiY2xsd2lkdmcwMGhjZzNnbnNkZWFkNHh3ZyJ9.7uE86t38ERr4ItEamH7Kkg';

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [this.lng, this.lat],
      zoom: 9
    });
    this.marker = new mapboxgl.Marker().setLngLat([this.lng, this.lat]).addTo(map);
  }
}
