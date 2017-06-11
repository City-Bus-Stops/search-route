import axios from 'axios';

class Auth {

  static setUserCredentials(userCredentials) {
    const { username, userId, userRole } = userCredentials;
    localStorage.setItem('username', username);
    localStorage.setItem('userId', userId);
    localStorage.setItem('userRole', userRole);
  }

  static setUsername(userName) {
    localStorage.setItem('username', userName);
  }

  static setUserStatus(userStatus) {
    localStorage.setItem('userStatus', userStatus);
  }

  static setAccessToken(accessToken) {
    localStorage.setItem('accessToken', accessToken);
  }

  static setRefreshToken(refreshToken) {
    localStorage.setItem('refreshToken', refreshToken);
  }

  static setUserRole(role) {
    localStorage.setItem('userRole', role);
  }

  static isUserRegistered = () => axios.defaults.headers.common.Authorization !== undefined

  static isUserAdmin = () => localStorage.getItem('userRole') === 'ADMIN'

  static deauthenticateUser() {
    localStorage.clear();
    delete axios.defaults.headers.common.Authorization;
  }

  static getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  static getUsername() {
    return localStorage.getItem('username');
  }

  static getUserId() {
    return localStorage.getItem('userId');
  }

  static getUserRole() {
    return localStorage.getItem('userRole');
  }
}

export default Auth;
