import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Sidebar, Button } from 'semantic-ui-react';
import Collapse from 'react-collapse';
import { isEmpty } from 'lodash';

import MapSidebar from '../MapSidebar/MapSidebar';
import Map from '../Map/Map';
import PointInfo from '../PointInfo/PointInfo';

class SearchRouteMapComponent extends Component {
  componentWillMount() {
    const { loadRouteGeoData } = this.props.actions;
    const { routeId } = this.props;

    loadRouteGeoData(routeId);
  }

  componentWillUnmount() {
    const { clearRouteGeoData } = this.props.actions;

    clearRouteGeoData();
  }

  render() {
    const { route, center, zoom, maxZoom, minZoom, zoomControl,
      isSidebarOpen, pointInfo } = this.props;
    const { getMapPointInfo, toggleSideBar, clearMapPointInfo } = this.props.actions;

    return (
      <div className="leaflet-pushable">
        <PointInfo
          pointInfo={pointInfo}
          clearMapPointInfo={clearMapPointInfo}
        />
        <Sidebar.Pushable>
          <Collapse isOpened={!isSidebarOpen}>
            <Button
              circular
              color="grey"
              icon="list"
              size="huge"
              className="sidebar-trigger-button"
              onClick={toggleSideBar}
            />
          </Collapse>
          <MapSidebar
            isSidebarOpen={isSidebarOpen}
            toggleSideBar={toggleSideBar}
          />
          <Sidebar.Pusher id="map">
            <div className="leaflet-container-main">
              {
                !isEmpty(route) &&
                <Map
                  data={route}
                  getMapPointInfo={getMapPointInfo}
                  center={center}
                  zoom={zoom}
                  maxZoom={maxZoom}
                  minZoom={minZoom}
                  zoomControl={zoomControl}
                />
              }
            </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

SearchRouteMapComponent.propTypes = {
  routeId: PropTypes.string.isRequired,
  route: PropTypes.arrayOf(PropTypes.shape).isRequired,
  pointInfo: PropTypes.shape().isRequired,
  center: PropTypes.arrayOf(PropTypes.number),
  zoom: PropTypes.number,
  maxZoom: PropTypes.number,
  minZoom: PropTypes.number,
  zoomControl: PropTypes.bool,
  isSidebarOpen: PropTypes.bool.isRequired,
  actions: PropTypes.shape({
    getMapPointInfo: PropTypes.func.isRequired,
    toggleSideBar: PropTypes.func.isRequired,
    loadRouteGeoData: PropTypes.func.isRequired,
    clearRouteGeoData: PropTypes.func.isRequired,
    clearMapPointInfo: PropTypes.func.isRequired,
  }).isRequired,
};

SearchRouteMapComponent.defaultProps = {
  center: [53.66946, 23.824368],
  zoom: 13,
  maxZoom: 16,
  minZoom: 11,
  zoomControl: false,
};

export default SearchRouteMapComponent;
