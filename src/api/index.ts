import axios from 'axios'
import {getStorage} from "../services/storage.service";
import {userStorageName} from "../services/auth.service";

const baseURL = '/'

export const axiosInstance = axios.create({baseURL})

axiosInstance.interceptors.request.use((request: any) => {
   request.headers  = {
      ...request.headers,
      'token': getStorage(userStorageName).token || '',
      'Accept': '*',
      'Content-Type': 'application/json'
   }
   return request
})

export const requestApi = (url: string, data: any = null, method: string = 'GET') => {
   return axiosInstance({url, method, data})
}

