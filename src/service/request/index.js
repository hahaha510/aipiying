import axios from "axios";
import { BASE_URL,TIMEOUT } from "./config";
  class HYRequest{
  constructor(baseURL,timeout){
    this.instance=axios.create({
      baseURL,
      timeout
    })

    // 进行响应拦截 返回直接是data数据 
    this.instance.interceptors.response.use((res)=>{
      return res.data
    },(err)=> err)
  }

  request(config){
   return this.instance.request(config)
  }
  get(config){
    return this.instance.request({...config,method:'get'})
  }
  post(config){
    return this.instance.request({...config,method:'post'})
  }
}
const hyRequest=new HYRequest(BASE_URL,TIMEOUT)
export default hyRequest