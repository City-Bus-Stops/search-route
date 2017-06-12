import axios from 'axios';

const apiErrorHandler = err => Promise.reject(err);

export const fetchFindUsertLocation = () => new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(
      (position) => { resolve(position); },
      (err) => { reject(err); },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 30000 },
    );
});

export const fetchFindUserAddress = coords =>
  axios.get(`/api/address?lat=${coords.latitude}&lon=${coords.longitude}`)
    .then(response => response.data)
    .catch(apiErrorHandler);

export const fetchSearchRoute = (from, to) =>
  axios.get(`/api/search-route?from=${from}&to=${to}`)
    .then(response => response.data)
    .catch(apiErrorHandler);

export const fetchRouteInfo = routeId =>
  axios.get(`/api/routes/${routeId}/info`)
    .then(response => response.data)
    .catch(apiErrorHandler);

export const fetchRouteGeoData = routeId =>
  axios.get(`/api/routes/${routeId}/geo`)
    .then(response => response.data)
    .catch(apiErrorHandler);

export const fetchMapPointInfo = pointId =>
  axios.get(`/api/points/${pointId}/info`)
    .then(response => response.data)
    .catch(apiErrorHandler);

export const fetchUserPointInfo = coords =>
  axios.get(`/api/user/info?lat=${coords.latitude}&lon=${coords.longitude}`)
    .then(response => response.data)
    .catch(apiErrorHandler);

export const fetchRouteBetweenPoints = (startPoint, endPoint) =>
  axios.get(`/api/path?startPoint=${JSON.stringify(startPoint)}&endPoint=${JSON.stringify(endPoint)}`)
    .then(response => response.data)
    .catch(apiErrorHandler);

export const fetchNearestBusStops = coords =>
  axios.get(`/api/nearest-bus-stops?lat=${coords.latitude}&lon=${coords.longitude}&distance=1000`)
    .then(response => response.data)
    .catch(apiErrorHandler);

export const fetchFavorites = () =>
  axios.get('/api/user/favorites')
    .then(response => response.data)
    .catch(apiErrorHandler);

export const fetchBusStopGeoData = busStopId =>
  axios.get(`/api/bus-stops/${busStopId}/geo`)
    .then(response => response.data);

export const fetchLoadUsers = () =>
 axios.get('/api/administration/users')
    .then(response => response.data)
    .catch(apiErrorHandler);

export const fetchRegisterUser = user =>
  axios.post('/api/administration/users', {
    /** TODO remove when send request to real server **/
    ...user,
  }, {
    'Content-Type': 'application/json',
  })
    .then(response => response.data)
    .catch(apiErrorHandler);

export const fetchDeleteUser = id =>
  axios.delete(`/api/administration/users/${id}`)
    .then(response => response.data)
    .catch(apiErrorHandler);

const setAccessToken = (response) => {
  const { authorize } = response.headers;
  if (authorize) {
    axios.defaults.headers.common.Authorization = authorize;
  }
  return response;
};

export const fetchLogin = params =>
  axios.post('/api/auth/login', params)
    .then(setAccessToken)
    .then(response => response.data)
    .catch(apiErrorHandler);

export const fetchSignup = params =>
  axios.post('/api/auth/signup', params)
    .then(response => response.data)
    .catch(apiErrorHandler);
