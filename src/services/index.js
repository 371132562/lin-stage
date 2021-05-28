//  利用require.context()自动读取目录下文件并导出(请求接口API.js)

//  页面中引入  import Request from $serivces
//  调用方式   Request.loginApi.login()

const files = require.context('./modules', false, /\.js$/)

const Request = {}
files.keys().forEach(key => {
    Request[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default Request
