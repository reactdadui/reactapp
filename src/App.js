import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,NavLink} from 'react-router-dom';
import Home from './components/Home';
import Main from './components/Main';
import Community from './components/Community';
import Cart from './components/Cart';
import Buy from './components/Buy';
//import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>高版本</h2>
        <Router>
          <div>
          {/* 首页买买买社区购物车我的 */}
            <NavLink to='./Home'>首页</NavLink>
            <NavLink to='./Buy'>买买买</NavLink>
            <NavLink to='./Community'>社区</NavLink>
            <NavLink to='./Cart'>购物车</NavLink>
            <NavLink to='./Main'>我的</NavLink>

            {/* 路由容器 */}
            <Route path='/home' component={Home}></Route>
            <Route path='/buy' component={Buy}></Route>
            <Route path='/community' component={Community}></Route>
            <Route path='/cart' component={Cart}></Route>
            <Route path='/main' component={Main}></Route>


          </div>
        </Router>
      </div>
    );
  }
}

export default App;
