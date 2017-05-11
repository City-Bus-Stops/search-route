import L from 'leaflet';

export const markerTypes = {
  start: { icon: 'github', color: 'black', background: 'white', size: 35 },
  bus_stop: { icon: 'bus', color: 'white', background: '#3949AB', size: 35 },
  end: { icon: 'golf', color: '#C62828', background: 'white', size: 35 },
  user: { icon: 'avatar', color: '#66ab23', background: 'white', size: 35 },
};

export const generateIcon = markerType => L.icon.mapkey(markerTypes[markerType]);

export const generateMarker = (type, latlng) => L.marker(latlng, { icon: generateIcon(type) });

export const pointToLayer = getMapPointInfo => (feature, latlng) =>
  generateMarker(feature.properties.type, latlng)
    .on('click', () => getMapPointInfo(feature.properties.id));

export const createWrapperReducer = (reducerFunction, predicate) => (state, action) => {
  const isInitializationCall = state === undefined;
  return typeof predicate === 'function' && !predicate(action) && !isInitializationCall ?
    state :
    reducerFunction(state, action);
};
