import React from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';

import '../../../public/mapkey-icons/L.Icon.Mapkey';

import { generateMarker } from '../../utils';

const mapStyle = { color: 'black', weight: 5, opacity: 0.65 };

const MapComponent = ({ data, center, zoom, maxZoom, minZoom, zoomControl, getMapPointInfo }) => (
  <Map
    center={center}
    zoom={zoom}
    maxZoom={maxZoom}
    minZoom={minZoom}
    zoomControl={zoomControl}
  >
    <TileLayer
      url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
    />
    <GeoJSON
      data={data}
      pointToLayer={(feature, latlng) =>
        generateMarker(feature, latlng, getMapPointInfo)
      }
      style={mapStyle}
    />
  </Map>
);

MapComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape).isRequired,
  getMapPointInfo: PropTypes.func.isRequired,
  center: PropTypes.arrayOf(PropTypes.number),
  zoom: PropTypes.number,
  maxZoom: PropTypes.number,
  minZoom: PropTypes.number,
  zoomControl: PropTypes.bool,
};

MapComponent.defaultProps = {
  center: [53.66946, 23.824368],
  zoom: 13,
  maxZoom: 16,
  minZoom: 11,
  zoomControl: false,
};

export default MapComponent;
