import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,NavLink} from 'react-router-dom';
import shouye from './components/shouye';
import wode from './components/wode';
import sheqv from './components/sheqv';
import gouwuche from './components/gouwuche';
import mai from './components/mai';
//import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>高版本</h2>
        <Router>
          <div>
          {/* 首页买买买社区购物车我的 */}
            <NavLink to='./shouye'>首页</NavLink>
            <NavLink to='./mai'>买买买</NavLink>
            <NavLink to='./sheqv'>社区</NavLink>
            <NavLink to='./gouwuche'>购物车</NavLink>
            <NavLink to='./wode'>我的</NavLink>

            {/* 路由容器 */}
            <Route path='/shouye' component={shouye}></Route>
            <Route path='/mai' component={mai}></Route>
            <Route path='/sheqv' component={sheqv}></Route>
            <Route path='/gouwuche' component={gouwuche}></Route>
            <Route path='/wode' component={wode}></Route>


          </div>
        </Router>
      </div>
    );
  }
}

export default App;
