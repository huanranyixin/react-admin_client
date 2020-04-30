import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import {
    HomeOutlined,
    AppstoreOutlined,
    BarsOutlined,
    ToolOutlined,
    UserOutlined,
    SafetyOutlined,
    AreaChartOutlined,
    BarcodeOutlined,
    BarChartOutlined,
    PieChartOutlined
} from '@ant-design/icons';

import menuConfig from '../../config/menuConfig';
import logo from '../../assets/images/logo.png';
import './index.less';

const SubMenu = Menu.SubMenu;

const getMenuList = (menuList, setOpenKey) => {
    return menuList.map(item => {
        if(!item.children) {
            return (
            <Menu.Item key={item.key}>
            <Link to={item.key}>
            <span>{item.title}</span>
            </Link>
            </Menu.Item>
            )
        } else {

            return ( <SubMenu
                key={item.key} title={
                <span>
                <span>{item.title}</span>
                </span> }
                > {getMenuList(item.children)}
                </SubMenu> 
            )
        }
    })
}
const LeftNav = () => {
    // 得到当前请求路径, 作为选中菜单项的 key
    const selectKey = useLocation().pathname;
    const [openKey, setOpenKey] = useState('');

    return (
        <div className="left-nav">
            <Link to='/home' className='logo-link'>
                <img src={logo} alt="logo"/>
                <h1>硅谷后台</h1>
            </Link>
            <Menu
                mode="inline"
                theme="dark" selectedKeys={[selectKey]} defaultOpenKeys={[openKey]}
            >
                {getMenuList(menuConfig)}
            </Menu>
        </div>
    );
}
export default LeftNav;