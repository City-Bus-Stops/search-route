import React from 'react';
import PropTypes from 'prop-types';
import { Sidebar, Button } from 'semantic-ui-react';
import { Link } from 'react-router';
import Collapse from 'react-collapse';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { isEmpty } from 'lodash';
import MarkerClusterGroup from 'react-leaflet-markercluster';

import '../../../public/mapkey-icons/L.Icon.Mapkey';

import { generateIcon, pointToLayer } from '../../utils';

import MapSidebar from '../MapSidebar/MapSidebar';
import GeoLayer from '../GeoLayer/GeoLayer';

const styleForGeoLayer = { color: 'black', weight: 5, opacity: 0.65 };

const MapComponent = ({
  data,
  clusterData,
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
  getUserInfo,
  isUserRegistered,
  findUserLocation,
  defaultMapCenter,
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
        isUserRegistered={isUserRegistered}
      />
      <Sidebar.Pusher id="map">
        <div className="leaflet-container-main">
          <Map
            center={isEmpty(mapCenter) ? defaultMapCenter : mapCenter}
            zoom={zoom}
            maxZoom={maxZoom}
            minZoom={minZoom}
            zoomControl={zoomControl}
          >
            <TileLayer
              url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            />
            <MarkerClusterGroup
              markers={clusterData}
              wrapperOptions={{ enableDefaultStyle: true }}
              onMarkerClick={marker => getPointInfo(marker.options.id)}
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
                onClick={getUserInfo}
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
          <Button
            circular
            color="green"
            icon="location arrow"
            size="huge"
            className="map-find-user-location-button"
            onClick={findUserLocation}
          />
          <Button
            circular
            color="google plus"
            icon="bus"
            size="huge"
            className="map-find-nearest-bus-stops-button"
            onClick={findNearestButStops}
          />
        </div>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  </div>
);

MapComponent.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape),
    PropTypes.shape(),
  ]).isRequired,
  clusterData: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  mapCenter: PropTypes.arrayOf(PropTypes.number).isRequired,
  defaultMapCenter: PropTypes.arrayOf(PropTypes.number),
  zoom: PropTypes.number,
  maxZoom: PropTypes.number,
  minZoom: PropTypes.number,
  zoomControl: PropTypes.bool,
  isSidebarOpen: PropTypes.bool.isRequired,
  userCoordinates: PropTypes.arrayOf(PropTypes.number),
  getPointInfo: PropTypes.func.isRequired,
  toggleSideBar: PropTypes.func.isRequired,
  getUserInfo: PropTypes.func.isRequired,
  findNearestButStops: PropTypes.func.isRequired,
  isUserRegistered: PropTypes.bool,
  findUserLocation: PropTypes.func.isRequired,
};

MapComponent.defaultProps = {
  data: [],
  defaultMapCenter: [53.66946, 23.824368],
  zoom: 16,
  maxZoom: 16,
  minZoom: 11,
  zoomControl: false,
  userCoordinates: [],
  isUserRegistered: false,
};

export default MapComponent;
