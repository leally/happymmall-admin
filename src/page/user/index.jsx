import React from 'react';
import { Link } from 'react-router-dom';

import PageTitle from 'component/page-title/index.jsx';

import Pagination from 'util/pagination/index.jsx';

import MUtil from 'util/mm.jsx';
const __mm = new MUtil();

import User from 'service/user-service.jsx';
const __user = new User();

class UserList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list: [],
      pageNum: 1,
      firstLoading: true
    }
  }
  componentDidMount() {
    this.loadUserList();
  }
  loadUserList() {
    __user.getUserList(this.state.pageNum)
    .then(res => {
      this.setState(res, () => {
        this.setState({
          firstLoading: false
        })
      })
    }, errMsg => {
      this.setState({
        list: []
      })
      __mm.errorTips(errMsg)
    })
  }
  onPageNumChange(pageNum) {
    this.setState({pageNum}, () => {
      this.loadUserList()
    })
  }
  render() {
    let listBody = this.state.list.map((user, index) => {
      return (
        <tr key={index}>
          <td>{user.id}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>{new Date(user.createTime).toLocaleString()}</td>
        </tr>
      )
    })
    let listError = (
      <tr>
        <td colSpan="5" className="text-center">
          {
            this.state.firstLoading
            ?
            '正在加载数据...'
            :
            '没有找到相应的结果~'
          }
        </td>
      </tr>
    )

    return (
      <div id="page-wrapper">
        <PageTitle title="用户列表"></PageTitle>
        <div className="row">
          <div className="col-md-12">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>用户名</th>
                  <th>邮箱</th>
                  <th>电话</th>
                  <th>注册时间</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.list.length > 0
                  ?
                  listBody
                  :
                  listError
                }
              </tbody>
            </table>
          </div>
        </div>
        <Pagination
          current={this.state.pageNum}
          total={this.state.total}
          onChange={pageNum => {
            this.onPageNumChange(pageNum)
          }}
        />
      </div>
    )
  }
}

export default UserList;
