import axios from "axios"

export function request(config) {
  // 1. 创建 axios 的实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/w6',
    timeout: 5000
  })

  // 2. axios 的拦截器
  // 啥时候用？
  // 1. config 中的一些信息不符合服务器要求
  // 2. 每次发送网络请求时，都希望在界面中先是一个请求的图标
  // 3. 某些网络请求（登陆（token）），必须携带一些特殊的信息。
  instance.interceptors.request.use(config => {
    // console.log(config);
    return config;
  }, error => {

  });

  // 响应拦截
  // instance.interceptors.response.use(res => {
  //   console.log(res);
  // }, error => {
  //   console.log(error);
  // })

  // 3. 发送真正的网络请求
  return instance(config)
}
