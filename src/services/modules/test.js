import CommonRequest from '../CommonRequest.js'
const request = {
    putTest: () => {
        return CommonRequest.put('/mock/106/demoPut', { name: 1 })
    }
}
export default request
