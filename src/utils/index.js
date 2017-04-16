import L from 'leaflet';

export const markerTypes = {
  start: { icon: 'avatar', color: 'white', background: '#388E3C', size: 35 },
  bus_stop: { icon: 'bus', color: 'white', background: '#3949AB', size: 35 },
  end: { icon: 'golf', color: '#C62828', background: 'white', size: 35 },
};

export const generateIcon = markerType => L.icon.mapkey(markerTypes[markerType]);

export const generateMarker = (feature, latlng, onClick) => {
  const { properties } = feature;
  const { id, name } = properties;
  const marker = L.marker(latlng, { icon: generateIcon(feature.properties.type) });
  return properties.type === 'start' || properties.type === 'end' ?
    marker.bindPopup(properties.address) :
    marker.on('click', () => onClick(id, name));
};
