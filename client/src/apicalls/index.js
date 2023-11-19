import axios from 'axios';

const backendURL = 'https://quizapplication-akd7.onrender.com/';

const axiosInstance = axios.create({
  baseURL: backendURL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export default axiosInstance;
