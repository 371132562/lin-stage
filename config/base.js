/*基本静态配置*/
export default {
    // IP
    HOST: 'localhost',
    // 本地服务端口号
    PORT: 8080,
    // 项目访问前缀
    BASE_PATH: '/#',
    // 项目名称
    PROJECT_NAME: 'demo',
    // 输出目录
    BUILD_PATH: 'dist',
    // 资源基本路径
    ASSET_PATH: './',
    //判断生产环境
    IS_PROD: process.env.NODE_ENV === 'production'
};
