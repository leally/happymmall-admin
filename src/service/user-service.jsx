import MUtil from 'util/mm.jsx';
const __mm = new MUtil();

class User {
  login(loginInfo) {
    return __mm.request({
      url: '/manage/user/login.do',
      type: 'post',
      data: loginInfo
    })
  }
  logout() {
    return __mm.request({
      url: '/user/logout.do',
      type: 'post'
    })
  }
  getUserList(pageNum) {
    return __mm.request({
      url: '/manage/user/list.do',
      type: 'post',
      data: {pageNum}
    })
  }
  checkLoginInfo(loginInfo) {
    let username = $.trim(loginInfo.username),
        password = $.trim(loginInfo.password);
    if (typeof username !== 'string' || username.length === 0) {
      return {
        status: false,
        msg: '用户名不能为空！'
      }
    }
    if (typeof password !== 'string' || password.length === 0) {
      return {
        status: false,
        msg: '密码不能为空！'
      }
    }
    return {
      status: true,
      msg: '验证通过'
    }
   }
}

export default User;