import { InternalAxiosRequestConfig } from 'axios';

import { authStorage } from '../utils';

import { initInstance } from './axios-instance';

export const BASE_URL = 'http://13.209.182.65:8080';

export const fetchInstance = initInstance({
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
