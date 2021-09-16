import CommonRequest from '../CommonRequest.js'
const request = {
    putTest: () => {
        return CommonRequest.put('/mock/106/demoPut', { data: { name: 2 } })
    }
}
export default request
