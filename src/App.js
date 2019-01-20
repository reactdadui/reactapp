import React, { Component } from 'react';
import {BrowserRouter as Router,Route,NavLink,Redirect,Switch} from 'react-router-dom';
import Home from './components/Home';
import Main from './components/Main';
import Community from './components/Community';
import Cart from './components/Cart';
import Buy from './components/Buy';
import './App.css';
import './font/iconfont.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="box">
          	
            {/* 路由容器 */}
            <Switch>
	            <Route path='/home' component={Home}></Route>
	            <Route path='/buy' component={Buy}></Route>
	            <Route path='/community' component={Community}></Route>
	            <Route path='/cart' component={Cart}></Route>
	            <Route path='/main' component={Main}></Route>
	            <Redirect to='/home'/>
            </Switch>
            {/* 首页买买买社区购物车我的 */}
          	<footer>
	            <NavLink to='/home'><b className="iconfont icon-home2"></b><p>首页</p></NavLink>
	            <NavLink to='/buy'><b className="iconfont icon-nvbao"></b><p>买买买</p></NavLink>
	            <NavLink to='/community'><b className="iconfont icon-xianshihoumai"></b><p>社区</p></NavLink>
	            <NavLink to='/cart'><b className="iconfont icon-gouwucheman"></b><p>购物车</p></NavLink>
	            <NavLink to='/main'><b className="iconfont icon-wodexuanzhong"></b><p>我的</p></NavLink>
            </footer>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
