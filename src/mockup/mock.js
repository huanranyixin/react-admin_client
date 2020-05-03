import Mock from 'mockjs';
Mock.setup({
    timeout: '200-600'
});
/*var mock = Mock.mock("/mock", {
    //"/mock"是通过ajax获取数据时填写的地址，可以随意写。但要和ajax请求时填写的地址一致。
    "userinfo|4":[{   			//生成四个如下格式的数据
        "id|+1":1, 						//数字从1开始，后续依次加1
        "name":"@cname",			//名字为随机中文名
        "age|18-28":25, 			//年龄是18-28之间的随机数
        "sex|1":["男","女"],	 //性别是数组里的随机一项
        "job|1":["web","teacher","python","php"]   //job是数组里的随机一项
    }]
});*/

// 登录
var login = Mock.mock(/\/manage\/login/, 'post', function (options) {
    let body = JSON.parse(options.body);
    if (body.username === 'admin' && body.password === 'admin') {
        return {
            "code": 1,
            "username": "admin"
        }
    } else {
        return {
            "code": 0,
            "message": "用户名或密码错误"
        }
    }
});

// 获取一级或某个二级分类列表
var login = Mock.mock(/\/manage\/category\/list/, 'post', function (options) {
    let body = JSON.parse(options.body);
    if (body.username === 'admin' && body.password === 'admin') {
        return {
            "code": 1,
            "username": "admin"
        }
    } else {
        return {
            "code": 0,
            "message": "用户名或密码错误"
        }
    }
});

const data = {
    login
};

// 输出结果
export default data;