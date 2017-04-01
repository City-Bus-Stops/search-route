import L from 'leaflet';

export const generateMarker = iconProps =>
  L.icon.mapkey({
    icon: 'bus',
    color: 'white',
    background: '#3949AB',
    size: 35,
    ...iconProps,
  });

export const pointToLayer = (feature, latlng, iconProps) =>
  L.marker(latlng, { icon: generateMarker(iconProps) });
