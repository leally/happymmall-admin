/*
 * @Author: leally Xie 
 * @Date: 2019-11-25 23:34:21 
 * @Last Modified by: leally Xie
 * @Last Modified time: 2019-11-29 01:02:21
 */
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Link, Switch } from 'react-router-dom';

import Layout from 'component/layout/index.jsx';

import Home from 'page/home/index.jsx';

// https://webthemez.com/demo/insight-free-bootstrap-html5-admin-template/index.html

class App extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route
              exact
              path="/"
              component={Home}
            />
            <Route
              exact
              path="/prodcut"
              component={Home}
            />
            <Route
              exact
              path="/prodcut.category"
              component={Home}
            />
          </Switch>
        </Layout>
      </Router>
    )
  }
}


ReactDom.render(
  <App />,
  document.getElementById('app')
)
