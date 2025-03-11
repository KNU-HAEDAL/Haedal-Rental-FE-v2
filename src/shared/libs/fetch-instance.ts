import { InternalAxiosRequestConfig } from 'axios';

import { authStorage } from '../utils';
import { initInstance } from './axios-instance';

const BASE_URL = 'http://localhost:8080';

const fetchInstance = initInstance({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

fetchInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = authStorage.accessToken.get();
    if (accessToken !== undefined) {
      config.headers['Content-Type'] = 'application/json';
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
