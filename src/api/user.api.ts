import axios from 'axios'

const defaultConfig = {
   headers: {
      "Content-Type": "application/json",
      "Accept" : "*"
   }
}

export const userPostRequest = (url: string, body: any, config: any = defaultConfig) => {
   return axios.post(url, body, config)
}

