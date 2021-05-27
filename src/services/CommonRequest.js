import BaseRequest from './BaseRequest'

class Request extends BaseRequest {
    //定义具体 请求
    get(url, params = {}) {
        return this.request({ method: 'GET', url, params })
    }
    post(url, data = {}, headers = {}) {
        this.request({ method: 'POST', url, data, headers })
    }
    put(url, data = {}, headers = {}) {
        this.request({ method: 'PUT', url, data, headers })
    }
    delete(url, data = {}, headers = {}) {
        this.request({ method: 'DELETE', url, data, headers })
    }
    all(...request) {
        return Promise.all([...request])
    }
}
export default new Request()
