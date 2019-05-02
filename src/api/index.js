import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'

//axios请求拦截添加token
axios.interceptors.request.use(config => {
  let token = localStorage.getItem('Authorization')
  if (token) {
    config.headers['Authorization'] = token
  }
  return config
})

//登录接口
export const login = params => {
  return axios.post('login', params).then(res => res.data)
}

//用户数据列表接口
export const getUserlist = params => {
  return axios.get('users',{params:params})
}
