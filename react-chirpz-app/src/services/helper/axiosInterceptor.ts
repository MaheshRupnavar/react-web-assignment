import axios from 'axios';


let headers = {};

const axiosInstance = axios.create({
//   baseURL: "http://localhost:4000/api/v1",
  baseURL: "http://192.168.1.21:4000/api/v1",
  headers,
});

axiosInstance.interceptors.request.use(
  async config => {
    
    // Authorization
    // config.headers.Authorization = `${token}`;

    return config;
  },

  error => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
