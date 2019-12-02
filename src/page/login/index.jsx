import React from 'react';

import User from 'service/user-service.jsx';
const __user = new User();

import MUtil from 'util/mm.jsx';
const __mm = new MUtil();

import './index.css';
import { stringify } from 'querystring';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirect: __mm.getUrlParam('redirect') || '/'
    }
  }
  componentWillMount() {
    document.title = '登录 - MMALL ADMIN';
  }
  onInputChange(e) {
    let inputValue = e.target.value,
        inputName = e.target.name
    this.setState({
      [inputName]: inputValue
    })
  }
  onSubmit(e) {
    let loginInfo = {
      username: this.state.username,
      password: this.state.password
    },
    checkResult = __user.checkLoginInfo(loginInfo);
    // 验证通过
    if (checkResult.status) {
      __user.login(loginInfo)
      .then(res => {
        __mm.setStorage('userInfo', res)
        this.props.history.push(this.state.redirect);
      }, errMsg => {
        __mm.errorTips(errMsg);
      })
    }else {   // 验证不通过
      __mm.errorTips(checkResult.msg);
    }
  }
  onInputKeyUp(e) {
    if (e.keyCode === 13) {
      this.onSubmit();
    }
  }
  render() {
    return (
      <div className="col-md-4 col-md-offset-4">
        <div className="panel panel-default login-panel">
          <div className="panel-heading">欢迎登陆 -- MMALL管理系统</div>
          <div className="panel-body">
            <div>
              <div className="form-group">
                <input
                  type="email"
                  name="username"
                  className="form-control"
                  placeholder="请输入用户名"
                  onChange={e => this.onInputChange(e)}
                  onKeyUp={e => this.onInputKeyUp(e)}
                />
              </div>
              <div className="form-group">
                <input 
                  type="password"
                  name="password"
                  className="form-control" 
                  placeholder="请输入密码"
                  onChange={e => this.onInputChange(e)}
                  onKeyUp={e => this.onInputKeyUp(e)}
                />
              </div>
              <button
                className="btn btn-lg btn-primary btn-block"
                onClick={e => this.onSubmit(e)}
              >登录</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
