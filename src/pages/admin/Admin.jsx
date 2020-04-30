import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd';
import memoryUtils from '../../utils/memoryUtils';

import LeftNav from '../../components/left-nav';
import Header from '../../components/header';

import Category from '../category/category';
import Bar from '../charts/bar';
import Line from '../charts/line';
import Pie from '../charts/pie';
import Role from '../role/role';
import Home from '../home/home';
import Product from '../product/product';
import User from '../user/user';
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
            <Content style={{backgroundColor: 'white'}}>
                <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/category' component={Category}/>
                    <Route path='/product' component={Product}/>
                    <Route path='/role' component={Role}/>
                    <Route path='/user' component={User}/>
                    <Route path='/charts/bar' component={Bar}/>
                    <Route path='/charts/line' component={Line}/>
                    <Route path='/charts/pie' component={Pie}/>
                    <Redirect to='/home' />
                </Switch>
            </Content>
            <Footer style={{textAlign: 'center', color: '#aaaaaa'}}>推荐使用谷歌浏览器，可以获得更佳页面操作体验</Footer>
            </Layout>
        </Layout>
    )
}

export default Login;