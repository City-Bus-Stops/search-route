import L from 'leaflet';

export const markerTypes = {
  start_point: { icon: 'avatar', color: 'white', background: '#388E3C', size: 35 },
  bus_stop: { icon: 'bus', color: 'white', background: '#3949AB', size: 35 },
  end_point: { icon: 'golf', color: '#C62828', background: 'white', size: 35 },
};

export const generateMarker = markerType => L.icon.mapkey(markerTypes[markerType]);

export const pointToLayer = (feature, latlng) =>
  L.marker(latlng, { icon: generateMarker(feature.properties.type) });
