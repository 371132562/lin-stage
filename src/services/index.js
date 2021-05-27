import CommonRequest from './CommonRequest.js'
const request = {
    putTest: () => {
        return CommonRequest.put('http://10.2.2.49:3000/mock/106/demoPut', { name: 1 })
    }
}
export default request
