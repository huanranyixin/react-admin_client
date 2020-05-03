import ajax from './ajax';

// 登录
export const reqLogin = (username, password) => ajax('/manage/login', {username, password}, 'POST');

// 获取一级或某个二级分类列表
export const reqCategorys = (parentId) => ajax('/manage/category/list', {parentId});

// 添加分类
export const reqAddCategory = (parentId, categoryName) => ajax('/manage/category/add', { parentId, categoryName }, 'POST');

// 更新品类名称
export const reqUpdateCategory = ({categoryId, categoryName}) => ajax('/manage/category/update', { categoryId, categoryName }, 'POST');