import axios from "axios";

// sk 

// promise方式
export function request(config){

    const axios2 = axios.create({
        baseURL: 'http://49.233.56.74:9080',
        // timeout: 50000
    });

    // 发送网络请求
    return axios2(config)

}