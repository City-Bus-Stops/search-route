import L from 'leaflet';

export const markerTypes = {
  start: { icon: 'avatar', color: 'white', background: '#388E3C', size: 35 },
  bus_stop: { icon: 'bus', color: 'white', background: '#3949AB', size: 35 },
  end: { icon: 'golf', color: '#C62828', background: 'white', size: 35 },
};

export const generateIcon = markerType => L.icon.mapkey(markerTypes[markerType]);

export const generateMarker = (feature, latlng, getPointInfo) => {
  const { id } = feature.properties;
  return L.marker(latlng, { icon: generateIcon(feature.properties.type) })
    .on('click', () => getPointInfo(id));
};

export const createWrapperReducer = (reducerFunction, predicate) => (state, action) => {
  const isInitializationCall = state === undefined;
  return typeof predicate === 'function' && !predicate(action) && !isInitializationCall ?
    state :
    reducerFunction(state, action);
};
