let BASE_URL = '' // 声明一个变量 BASE_URL，先赋值为空字符串

if (import.meta.env.PROD) { // 判断当前是否为生产环境（打包部署后）
  // 生产环境
  BASE_URL = 'http://152.136.185.210:4000' // 生产环境的服务器地址
} else { // 否则说明是开发环境（本地运行）
  // 开发环境
  BASE_URL = 'http://152.136.185.210:5000' // 开发环境的服务器地址
}

const TIME_OUT = 10000 // 导出请求超时时间，单位毫秒（10000ms = 10秒）

export { BASE_URL , TIME_OUT } // 导出 BASE_URL 和 TIME_OUT，供其他文件导入使用