/*
 * @Author: leally Xie 
 * @Date: 2019-11-25 23:34:21 
 * @Last Modified by: leally Xie
 * @Last Modified time: 2019-12-02 23:09:21
 */
import React from 'react';

import { Link, Switch, Route, Redirect} from 'react-router-dom';

import ProductList from 'page/product/index/index.jsx';
import Home from 'page/home/index.jsx';

// https://webthemez.com/demo/insight-free-bootstrap-html5-admin-template/index.html

class ProductRouter extends React.Component {
  constructor(props){
    super(props)
  }
  test() {
    return (
      <div>8989898989898</div>
    )
  }
  render() {
    return (
      <Switch>
        <Route
          path="product/index"
          component={ProductList}
        />
        <Redirect exact from="/product" to="/product/index" />
      </Switch>
    )
  }
}

export default ProductRouter;
