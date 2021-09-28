/*基本静态配置*/
module.exports = {
    //项目标题
    TITLE: 'webpack-vue3',
    // IP
    HOST: '0.0.0.0',
    // 本地服务端口号
    PORT: 8080,
    // 项目访问前缀
    BASE_PATH: '/#',
    // 项目名称
    PROJECT_NAME: 'demo',
    // 输出目录
    BUILD_PATH: 'frontend',
    DLL_PATH: 'dll',
    // 资源基本路径
    ASSET_PATH: './',
    //判断生产环境
    IS_PROD: process.env.NODE_ENV === 'production'
}
