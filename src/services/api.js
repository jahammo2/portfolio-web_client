import axios from 'axios';

const apiService = {
  applyInterceptors (manager, interceptors) {
    interceptors.forEach((interceptor) => {
      manager.use(interceptor.fulfilled, interceptor.rejected);
    });
  },

  create (options = {}) {
    const api = axios.create({
      baseURL: ''
    });
    const requestInterceptors = [
      { fulfilled: apiService.transformRequest },
      ...(options.requestInterceptors || [])
    ];
    const responseInterceptors = [
      { fulfilled: apiService.transformResponse, rejected: apiService.handleError },
      ...(options.responseInterceptors || [])
    ];

    apiService.applyInterceptors(api.interceptors.request, requestInterceptors);
    apiService.applyInterceptors(api.interceptors.response, responseInterceptors);

    return api;
  },

  handleError (error) {
    return Promise.reject(error);
  },

  transformRequest (config) {
    config.headers = { 'Content-Type': 'application/json' };

    return config;
  },

  transformResponse (response) {
    return response;
  }
};

export const apiFactory = {
  create: apiService.create
};
export default apiService.create();
