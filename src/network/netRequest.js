import axios from "axios";


// // 回调方式
// export function request(config,success,failure){//调用时传入config配置 success函数 failure函数
//     const instance = axios.create({
//         baseURL: 'https://keasarsk.github.io',
//         timeout: 5000
//     })

//     // 发送网络请求
//     instance(config)
//     .then(res => {
//         // console.log(res);
//         success(res)//success函数回调
//     })
//     .catch(err =>{
//         // console.log(err);
//         failure(err)//failure函数回调
//     })
// }

// promise方式
export function request(config){

    const axios2 = axios.create({
        baseURL: 'http://49.233.56.74:9080',
        // timeout: 50000
    });

    // 发送网络请求
    return axios2(config)

}