import React from 'react';
import { Redirect } from 'react-router-dom'
import { Layout } from 'antd';
import memoryUtils from '../../utils/memoryUtils';
import LeftNav from '../../components/left-nav';
import Header from '../../components/header';

const { Footer, Sider, Content } = Layout;
const Login = () =>  {
    const user = memoryUtils.user;
    if (!user || !user.username) {
        return <Redirect to="/login" />
    }
    return (
        <Layout style={{height: '100%'}}>
            <Sider>
                <LeftNav />
            </Sider>
            <Layout>
            <Header>Header</Header>
            <Content style={{backgroundColor: 'white'}}>Content</Content>
            <Footer style={{textAlign: 'center', color: '#aaaaaa'}}>推荐使用谷歌浏览器，可以获得更佳页面操作体验</Footer>
            </Layout>
        </Layout>
    )
}

export default Login;