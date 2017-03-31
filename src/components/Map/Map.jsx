import React from 'react';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';
import '../../../public/mapkey-icons/L.Icon.Mapkey';

import { pointToLayer } from '../../utils';
import mockGeoJson from '../../mockData/mockGeoJson';

const MapComponent = () => (
  <div id="map">
    <div className="leaflet-container-main">
      <Map
        center={[53.66946, 23.824368]}
        zoom={13}
        maxZoom={16}
        zoomControl={false}
      >
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <GeoJSON
          data={mockGeoJson}
          pointToLayer={pointToLayer}
          style={{ color: 'black', weight: 5, opacity: 0.65 }}
        />
      </Map>
    </div>
  </div>
);

export default MapComponent;
