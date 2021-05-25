import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geolocalisation',
  templateUrl: './geolocalisation.component.html',
  styleUrls: ['./geolocalisation.component.css']
})


export class GeolocalisationComponent implements OnInit {
  geolocalisation =[];
  geolocalisationMarker; 

  lat = 36.806496;
  long = 10.181532;
  latA = 37.29;
  longA = 9.87;
  zoom = 8;
  styles: any = [{
    featureType: 'all',
    stylers: [{
      saturation: -80
    }]
  }, {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [{
      hue: '#00ffee'
    }, {
      saturation: 50
    }]
  }, {
    featureType: 'poi.business',
    elementType: 'labels',
    stylers: [{
      visibility: 'off'
    }]
  }]; 

  onChooseLocation(event) {
    console.log(event);
  }
  constructor() {
    
  }
   
  ngOnInit(): void {
  }
 
  marker(geolocalisation) {
    this.geolocalisationMarker = geolocalisation;
  } 
}
 