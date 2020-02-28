import store from './store';
import axios from 'axios'
// 请求拦截
axios.interceptors.request.use(config=>{
    store.dispatch('setLoading',true)
    if(localStorage.ele_login){
        config.headers.Authorization=localStorage.ele_login
    }
    return config
},error=>{
    return Promise.reject(error)
})
// 响应拦截
axios.interceptors.response.use(response=>{
    store.dispatch('setLoading',false)
    return response
},error=>{
    store.dispatch('setLoading',false)
    return Promise.reject(error)
})
export default axios