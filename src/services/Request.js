import Base from './Base'

class Request extends Base {
    //定义具体 请求
    get(url, options) {
        return this.request(url, { method: 'GET', ...options })
    }
    post(url, options) {
        return this.request(url, { method: 'POST', ...options })
    }
    put(url, options) {
        return this.request(url, { method: 'PUT', ...options })
    }
    delete(url, options) {
        return this.request(url, { method: 'DELETE', ...options })
    }
    upload(url, options) {
        return this.request(url, { method: 'POST', headers: { 'Content-Type': 'multipart/form-data' }, ...options })
    }
    all(...request) {
        return Promise.all([...request])
    }
}
export default new Request()
