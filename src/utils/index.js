/* eslint-disable arrow-parens */
import L from 'leaflet';
import moment from 'moment';

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
    .on('click', () => getMapPointInfo(
      feature.properties.id,
      { lat: feature.geometry.coordinates[1], lng: feature.geometry.coordinates[0] }),
    );

export const createWrapperReducer = (reducerFunction, predicate) => (state, action) => {
  const isInitializationCall = state === undefined;
  return typeof predicate === 'function' && !predicate(action) && !isInitializationCall ?
    state :
    reducerFunction(state, action);
};

/** Date format: HH:mm **/
export const formDateWithHoursAndMinutes = date => moment(date).format('HH:mm');

/** Return current time **/
export const getCurrentTime = () => moment();

/** Return date with added MINUTES **/
export const getDateWithAddedMinutes = minutes =>
  formDateWithHoursAndMinutes(getCurrentTime().add(Number(minutes), 'minutes'));

export const isBusStopInfo = info =>
  info.type === 'start' ||
  info.type === 'end' ||
  info.type === 'bus_stop';

export const prepareMarkersForClusterLayer = markers => markers.map(marker => ({
  lat: marker.lat,
  lng: marker.lng,
  options: {
    id: marker.id,
    icon: generateIcon(marker.type),
  },
}));

export const findStartPointIndexInGeoData = geoData => geoData.findIndex(element => element.properties.type === 'start');

export const getTimeFromMins = mins => moment.utc().hours(mins / 60).minutes(mins % 60).format('HH:mm');

export const prepareTimeToSchedule = string => {
  const minutes = string.split('&').map(times => times.split(','));
  return {
    workingDay: minutes[0].map(mins => getTimeFromMins(mins)),
    dayOff: minutes[1].map(mins => getTimeFromMins(mins)),
  };
};

export const getScheduleMinutesFromHour = (minutes, hour, isOffDay) => {
  const day = isOffDay ? 'dayOff' : 'workingDay';
  const preparedMinutes = prepareTimeToSchedule(minutes);
  const filteredTimes = preparedMinutes[day].filter(time => Number(time.split(':')[0]) === hour);
  return filteredTimes.map(time => Number(time.split(':')[1])).join('  ');
};
