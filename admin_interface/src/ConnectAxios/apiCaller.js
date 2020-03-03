import axios from 'axios'
import * as Config from '../Constants/Config'


export default function callApi(endpoint, method ,body){
  return axios({
    method: method,
    url: `/${endpoint}`,
    data: body
  })
  .catch((error) => { console.log(error.response); return Promise.reject(error.response)});
  
}