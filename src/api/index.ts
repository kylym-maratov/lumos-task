import axios from 'axios'
import {getStorage} from "../services/storage.service";
import {userStorageName} from "../services/auth.service";
import {store} from "../store";
import {setFailedMessage, setLoading} from "../store/actions/loading.action";

const baseURL = '/'

export const axiosInstance = axios.create({baseURL})

axiosInstance.interceptors.request.use((request: any) => {
   store.dispatch(setLoading(true))
   store.dispatch(setFailedMessage(''))
   request.headers  = {
      ...request.headers,
      'token': getStorage(userStorageName).token || '',
      'Accept': '*',
      'Content-Type': 'application/json'
   }
   return request
})

axiosInstance.interceptors.response.use(
  (response: any) => {
     store.dispatch(setLoading(false))
     return response
  },
  ({ response }: any) => {

     if (!response.ok) {
       store.dispatch(setLoading(false))
       store.dispatch(setFailedMessage(response.data.error))
     }

     return Promise.reject(response);
  }
);




export const requestApi = (url: string, data: any = null, method: string = 'GET') => {
   return axiosInstance({url, method, data})
}

