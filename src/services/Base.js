/* axios二次封装基础文件 */
import axios from 'axios'

import LocalStorageUtil from '@/utils/LocalStorageUtils.js'

// 全局取消请求标识
const CancelToken = axios.CancelToken
const source = CancelToken.source()

export default class Base {
  //默认配置
  defaultConfig = {
    baseURL: process.env.API_URL,
    timeout: 1000 * 20000,
    withCredentials: true
  }

  // 拦截器
  interceptors(instance) {
    // 添加请求拦截器
    instance.interceptors.request.use(
      config => {
        const { headers, ...rest } = config
        const Authorization = LocalStorageUtil.getItem('Authorization')
        return {
          ...rest,
          cancelToken: source.token,
          headers: {
            ...headers,
            Authorization
          }
        }
      },
      error => {
        return Promise.reject(error)
      }
    )
    // 添加响应拦截器
    instance.interceptors.response.use(
      ({ data }) => {
        switch (data.code) {
        case 11: //用户名不存在
        case 12: //密码错误
            break

        case 13: //用户名已存在
          break

          case 14: //已登出
          break

        case 15: //未登录
        case 16: //登录信息过期，需重新登录
          break

        default:
          return data
        }
        return data
      },
      error => {
        switch (error.response.status) {
        case 401:
          // 取消所有请求
          source.cancel()
          // 清空本地缓存，然后退出
          localStorage.clear()
          window.location.hash = '/user/login'
          break

        case 403:
          window.location.hash = '/'
            break

        default:
          return Promise.reject(error)
        }
      }
    )
  }

  //形成实例
  request(url, options) {
    const instance = axios.create()
    // 合并options
    options = Object.assign(this.defaultConfig, { url, ...options })
    // 注册拦截器
    this.interceptors(instance)
    // 返回实例
    return instance(options)
  }
}
