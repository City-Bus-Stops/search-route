import React from 'react';
import PropTypes from 'prop-types';
import { Sidebar, Button } from 'semantic-ui-react';
import { Link } from 'react-router';
import Collapse from 'react-collapse';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { isEmpty } from 'lodash';

import '../../../public/mapkey-icons/L.Icon.Mapkey';

import { generateIcon, pointToLayer } from '../../utils';

import MapSidebar from '../MapSidebar/MapSidebar';
import GeoLayer from '../GeoLayer/GeoLayer';

const styleForGeoLayer = { color: 'black', weight: 5, opacity: 0.65 };

const MapComponent = ({
  data,
  zoom,
  maxZoom,
  minZoom,
  zoomControl,
  isSidebarOpen,
  userCoordinates,
  mapCenter,
  toggleSideBar,
  findNearestButStops,
  getPointInfo,
  getUserPointInfo,
}) => (
  <div className="leaflet-pushable">
    <Sidebar.Pushable>
      <Collapse isOpened={!isSidebarOpen}>
        <Button
          circular
          color="blue"
          icon="list"
          size="huge"
          className="sidebar-trigger-button"
          onClick={toggleSideBar}
        />
      </Collapse>
      <MapSidebar
        isSidebarOpen={isSidebarOpen}
        toggleSideBar={toggleSideBar}
        findNearestButStops={findNearestButStops}
      />
      <Sidebar.Pusher id="map">
        <div className="leaflet-container-main">
          <Map
            center={mapCenter}
            zoom={zoom}
            maxZoom={maxZoom}
            minZoom={minZoom}
            zoomControl={zoomControl}
          >
            <TileLayer
              url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            />
            <GeoLayer
              data={data}
              pointToLayer={pointToLayer(getPointInfo)}
              style={styleForGeoLayer}
            />
            {
              !isEmpty(userCoordinates) &&
              <Marker
                position={userCoordinates}
                icon={generateIcon('user')}
                onClick={getUserPointInfo}
              />
            }
          </Map>
          <Link to="/search-route" className="menu-item" activeClassName="menu-item-active">
            <Button
              circular
              color="blue"
              icon="search"
              size="huge"
              className="map-search-button"
            />
          </Link>
        </div>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  </div>
);

MapComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape),
  mapCenter: PropTypes.arrayOf(PropTypes.number),
  zoom: PropTypes.number,
  maxZoom: PropTypes.number,
  minZoom: PropTypes.number,
  zoomControl: PropTypes.bool,
  isSidebarOpen: PropTypes.bool.isRequired,
  userCoordinates: PropTypes.arrayOf(PropTypes.number),
  getPointInfo: PropTypes.func.isRequired,
  toggleSideBar: PropTypes.func.isRequired,
  getUserPointInfo: PropTypes.func.isRequired,
  findNearestButStops: PropTypes.func.isRequired,
};

MapComponent.defaultProps = {
  data: [],
  mapCenter: [53.66946, 23.824368],
  zoom: 16,
  maxZoom: 16,
  minZoom: 11,
  zoomControl: false,
  userCoordinates: [],
};

export default MapComponent;
