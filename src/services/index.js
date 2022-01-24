//  利用require.context()自动读取目录下文件并导出(请求接口API.js)

//  页面中引入  import Service from '@/serivces'
//  调用方式   Service.loginApi.login()  模块名即文件名

const files = require.context('./modules', false, /\.js$/)

const Service = {}
files.keys().forEach(key => {
  Service[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default Service
