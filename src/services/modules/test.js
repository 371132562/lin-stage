import CommonRequest from '../Request.js'
const request = {
    putTest: () => {
        return CommonRequest.put('/mock/106/demoPut', { data: { name: 2 } })
    },
    getTest: () => {
        return CommonRequest.get('/mock/106/demoPut', { data: { name: 2 } })
    }
}
export default request
