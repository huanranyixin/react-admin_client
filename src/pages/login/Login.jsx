import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined ,LockOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

import logo from './images/logo.png';
import './login.less';
import { reqLogin } from '../../api/api';
import memoryUtils from '../../utils/memoryUtils';
import storageUtils from '../../utils/storageUtils';
const Item = Form.Item;

/*
    登录
    */
const login =async (values, history) => {
    let data = await reqLogin(values.username, values.password);

    if (data.code === 1) {
        // 登录成功
        storageUtils.saveUser({username: data.username});
        memoryUtils.user = {username: data.username};
        history.replace('/');
    } else {
        message.error(data.message)
    }
};
/**
 * 自定义表单的校验规则
 */
const validator = (value) => {
    // console.log(rule, value)
    const length = value && value.length;
    const pwdReg = /^[a-zA-Z0-9_]+$/;

    if (!value) {
        // callback 如果不传参代表校验成功，如果传参代表校验失败，并且会提示错误
        return Promise.reject(' 必须输入密码');
    } else if (length < 4) {
        return Promise.reject(' 密码必须大于 4  位');
    } else if (length > 12) {
        return Promise.reject(' 密码必须小于 12  位');
    } else if (!pwdReg.test(value)) {
        return Promise.reject(' 密码必须是英文、数组或下划线组成');
    } else {
        return Promise.resolve();
    }
};

const Login = () => {
    const history = useHistory();
    
    // 判断是否已登录
    if (storageUtils.getUser().username) {
        memoryUtils.user = storageUtils.getUser();
        history.replace('/');
    }
    return (
        <div className='login'>
            <header className='login-header'>
                <img src={logo} alt="logo"/>
                <h1>React 项目: 后台管理系统</h1>
            </header>
            <section className='login-content'>
                <h3>用户登陆</h3>
                <Form onFinish={(values, history) => {login(values, history)}} className="login-form">
                    <Item name="username"
                          rules={[
                              {required: true, whitespace: true, message: ' 必须输入用户名'},
                              {min: 4, message: ' 用户名必须大于 4  位'},
                              {max: 12, message: ' 用户名必须小于 12  位'},
                              {pattern: /^[a-zA-Z0-9_]+$/, message: ' 用户名必须是英文、数组或下划线组成'}
                          ]}
                    >
                        <Input prefix={<UserOutlined className="icon-color"/>}
                               placeholder=" 用户名"
                        />
                    </Item>
                    <Item name="password"
                          rules={[
                              {
                                  validator: (_, value) => validator(value)
                              }
                          ]}
                    >
                        <Input prefix={<LockOutlined className="icon-color" />}
                               type="password" placeholder=" 密码"/>
                    </Item>
                    <Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                    </Item>
                </Form>
            </section>
        </div>
    );
};

/*
    用户名 / 密码的的合法性要求
    1)必须输入
    2)必须大于 4 位
    3)必须小于 12 位
    4)必须是英文、数组或下划线组成
*/

export default Login;