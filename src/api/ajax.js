import axios from 'axios';
import {message} from 'antd';
// mock数据
import '../mockup/mock';

export default function ajax(url, data = {}, method = 'GET') {
    return new Promise( resolve => {
        let promise;
        promise = method === 'GET' ? axios.get(url, {params: data}) : axios.post(url, data);
        promise.then(response => {
            resolve(response.data)
        }).catch(error => {
            message.error(' 请求错误: ' + error.message)
        })
    })
}