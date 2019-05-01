import axios from 'axios'
axios.defaults.baseURL='http://127.0.0.1:8888/api/private/v1/'

//登录接口
export const login = params=>{
  return axios.post('login',params).then(res=>res.data)
}
