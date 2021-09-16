import BaseRequest from './BaseRequest'

class Request extends BaseRequest {
    //定义具体 请求
    get(url, options) {
        return this.request(url, { method: 'GET', ...options })
    }
    post(url, options) {
        this.request(url, { method: 'post', ...options })
    }
    put(url, options) {
        this.request(url, { method: 'PUT', ...options })
    }
    delete(url, options) {
        this.request(url, { method: 'DELETE', ...options })
    }
    upload(url, options) {
        this.request(url, { method: 'post', headers: { 'Content-Type': 'multipart/form-data' }, ...options })
    }
    all(...request) {
        return Promise.all([...request])
    }
}
export default new Request()
