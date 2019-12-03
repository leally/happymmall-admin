/*
 * @Author: leally Xie 
 * @Date: 2019-11-25 23:34:21 
 * @Last Modified by: leally Xie
 * @Last Modified time: 2019-12-02 23:09:21
 */
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Link, Switch } from 'react-router-dom';

import Layout from 'component/layout/index.jsx';

import Home from 'page/home/index.jsx';
import ProductRouter from 'page/product/router.jsx';
import Login from 'page/login/index.jsx';
import ErrorPage from 'page/error/index.jsx';
import UserList from 'page/user/index.jsx';

// https://webthemez.com/demo/insight-free-bootstrap-html5-admin-template/index.html

class App extends React.Component {
  constructor(props){
    super(props)
  }
  LayoutRouter() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product" component={ProductRouter} />
          <Route exact path="/product-category" component={Home} />
          <Route path="/user/index" component={UserList} />
          <Redirect exact from="/user" to="/user/index" />        
          <Route exact path="/order" component={Home} />
          <Route component={ErrorPage} />
        </Switch>
      </Layout>
    )
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" render={ props => (
            this.LayoutRouter()
          )} />
        </Switch>
        
      </Router>
    )
  }
}


ReactDom.render(
  <App />,
  document.getElementById('app')
)
