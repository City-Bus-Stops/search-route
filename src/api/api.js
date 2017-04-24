import axios from 'axios';

export const verifyStatus = (response) => {
  const { status, statusText } = response;
  if (status >= 200 && status < 300) return response;
  throw new Error(statusText);
};

export const fetchFindUsertLocation = () => new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(
      (position) => { resolve(position); },
      (err) => { reject(err); },
      { enableHighAccuracy: true, timeout: 10000 },
    );
});

export const fetchFindUserAddress = (lat, lon) =>
  axios.get(`/address?lat=${lat}&lon=${lon}`)
    .then(verifyStatus);

export const fetchSearchRoute = (from, to) =>
  axios.get(`/search-route?from=${from}&to=${to}`)
    .then(verifyStatus);

export const fetchRouteInfo = routeId =>
  axios.get(`/routes/${routeId}/info`)
    .then(verifyStatus);
