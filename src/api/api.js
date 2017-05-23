import axios from 'axios';

export const fetchFindUsertLocation = () => new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(
      (position) => { resolve(position); },
      (err) => { reject(err); },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 30000 },
    );
});

export const fetchFindUserAddress = coords =>
  axios.get(`/address?lat=${coords.latitude}&lon=${coords.longitude}`)
    .then(response => response.data);

export const fetchSearchRoute = (from, to) =>
  axios.get(`/search-route?from=${from}&to=${to}`)
    .then(response => response.data);

export const fetchRouteInfo = routeId =>
  axios.get(`/routes/${routeId}/info`)
    .then(response => response.data);

export const fetchRouteGeoData = routeId =>
  axios.get(`/routes/${routeId}/geo`)
    .then(response => response.data);

export const fetchMapPointInfo = pointId =>
  axios.get(`/points/${pointId}/info`)
    .then(response => response.data);

export const fetchUserPointInfo = coords =>
  axios.get(`/user/info?lat=${coords.latitude}&lon=${coords.longitude}`)
    .then(response => response.data);

export const fetchRouteBetweenPoints = (startPoint, endPoint) =>
  axios.get(`/path?startPoint=${JSON.stringify(startPoint)}&endPoint=${JSON.stringify(endPoint)}`)
    .then(response => response.data);

export const fetchNearestBusStops = coords =>
  axios.get(`/nearest-bus-stops?lat=${coords.latitude}&lon=${coords.longitude}&distance=1000`)
    .then(response => response.data);

export const fetchFavorites = () =>
  axios.get('/user/favorites')
    .then(response => response.data);

export const fetchBusStopGeoData = busStopId =>
  axios.get(`/bus-stops/${busStopId}/geo`)
    .then(response => response.data);

export const fetchLoadUsers = () =>
 axios.get('/administration/users')
    .then(response => response.data);

export const fetchRegisterUser = user =>
  axios.post('/administration/users', {
    /** TODO remove when send request to real server **/
    ...user,
  }, {
    'Content-Type': 'application/json',
  })
    .then(response => response.data);

export const fetchDeleteUser = id =>
  axios.delete(`/administration/users/${id}`)
    .then(response => response.data);
