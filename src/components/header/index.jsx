import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Modal } from 'antd';

import LinkButton from '../link-button';
import menuList from '../../config/menuConfig';
// import {reqWeather} from '../../api';
import {formateDate} from '../../utils/dateUtils';
import memoryUtils from '../../utils/memoryUtils';
import storageUtils from '../../utils/storageUtils';
import './index.less';

/*根据请求的 path 得到对应的标题 */
const getTitle = (path) => {
    let title;
    menuList.forEach(menu => {
        if(menu.key===path) {
            title = menu.title;
        } else if (menu.children) {
            menu.children.forEach(item => {
                if(path.indexOf(item.key)===0) {
                    title = item.title;
                }
            })
        }
    });
    return title;
};

const Header = () => {
    const [sysTimeState, setSysTimeState] = useState('');
    const [dayPictureUrlState, setDayPictureUrlState] = useState('');
    const [weatherState, setWeatherState] = useState('');
    const history = useHistory();
    // 得到当前用户
    const user = memoryUtils.user;
    // 得到当前请求的路径
    const path = useLocation().pathname;
    // 得到对应的标题
    const title = getTitle(path);

    useEffect(() => {
        setSysTimeState(formateDate(Date.now()));
        // 由于获取天气接口有问题，暂时注释掉
        // getWeather();
        let intervalId = setInterval(() => {
            setSysTimeState(formateDate(Date.now()));
        }, 1000);
        return () => {
            clearInterval(intervalId);
        }
    }, []);
    /*发异步 ajax 获取天气数据并更新状态 */
    // const getWeather = async () => {
    //     const {dayPictureUrl, weather} = await reqWeather('上海');
    //     setDayPictureUrlState(dayPictureUrl);
    //     setWeatherState(weather);
    // }
    /*退出登陆 */
    const logout = () => {
        Modal.confirm({
            content: '确定退出吗?',
            onOk: () => {
                storageUtils.removeUser();
                memoryUtils.user = {}; // 跳转到 login
                history.replace('/login')
            },
            onCancel() {
                console.log('Cancel')
            },
        })
    };

    return (
        <div className="header">
            <div className="header-top">
                <span>欢迎, {user.username}</span>
                <LinkButton onClick={logout}>退出</LinkButton>
            </div>
            <div className="header-bottom">
                <div className="header-bottom-left">{title}</div>
                <div className="header-bottom-right">
                    <span>{sysTimeState}</span>
                    <img src={dayPictureUrlState} alt="weather"/>
                    <span>{weatherState}</span>
                </div>
            </div>
        </div>
    )
};
export default Header;