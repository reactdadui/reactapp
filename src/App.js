import React, { Component } from 'react';
import {BrowserRouter as Router,Route,NavLink,Redirect,Switch} from 'react-router-dom';
import Home from './components/Home';
import Main from './components/Main';
import Community from './components/Community';
import Cart from './components/Cart';
import Buy from './components/Buy';
import './App.css';

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
	            <NavLink to='/home'>首页</NavLink>
	            <NavLink to='/buy'>买买买</NavLink>
	            <NavLink to='/community'>社区</NavLink>
	            <NavLink to='/cart'>购物车</NavLink>
	            <NavLink to='/main'>我的</NavLink>
            </footer>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
