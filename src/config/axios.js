import axios from 'axios';
import env from '../../env';

const backendApi = axios.create({
    baseURL: env.BACK_URL
});

const errorInterceptor = (err) => {
    const responseData = err.response.data;
    err.data = responseData;
    throw err;
  };
  
  backendApi.interceptors.response.use(null, errorInterceptor);
  
  export default backendApi;