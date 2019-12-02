import React from 'react';

import MUtil from 'util/mm.jsx';
const __mm = new MUtil();

import User from 'service/user-service.jsx';
const __user = new User();

import { Link } from 'react-router-dom';

class NavTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: __mm.getStorage('userInfo').username || ''
    }
  }
  onLogout() {
    __user.logout()
    .then(res => {
      __mm.removeStorage('userInfo');
      // this.props.history.push('/login');
      window.location.href = '/login';
    }, errMsg => {
      __mm.errorTips(errMsg);
    })
  }
  render() {
    return (
      <div className="navbar navbar-default top-navbar" >
        <div className="navbar-header">
          <Link className="navbar-brand" to="/"><b>Happy</b>MMall</Link>
        </div>

        <ul className="nav navbar-top-links navbar-right">
          <li className="dropdown">
            <a className="dropdown-toggle" href="javascript:;">
              <i className="fa fa-envelope fa-fw"></i>
              {
                this.state.username
                ? <span>欢迎，{this.state.username}</span>
                : <span>欢迎您</span>
              }
              <i className="fa fa-caret-down"></i>
            </a>
            <ul className="dropdown-menu dropdown-user">
              <li>
                <a onClick={() => this.onLogout()}>
                  <i className="fa fa-sign-out fa-fw"></i>
                  <span>退出登录</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}

export default NavTop;
