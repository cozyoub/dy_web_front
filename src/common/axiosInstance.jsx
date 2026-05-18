import axios from 'axios';
import { BASE_API_URL } from './constants';
import useUserStore from '../store/useUserStore'; 

const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const user = useUserStore.getState().user;
  const token = user?.token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    //console.log("전송되는 토큰:", token);
  } else {
    //console.log("토큰 없음 .."); 
  }
  
  return config;
}, (error) => {
  return Promise.reject(error);
});

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      if (window.location.pathname.includes('admin-login')) return Promise.reject(error);
      if (!useUserStore.getState().user) return Promise.reject(error); 
      useUserStore.getState().setCurrentUser(null);
      localStorage.removeItem('token');
      window.location.href = '/admin-login';
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;