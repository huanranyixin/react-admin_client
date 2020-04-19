import ajax from './ajax';

// 登录
export const reqLogin = (username, password) =>
    ajax('/api/login', {username, password}, 'POST');
