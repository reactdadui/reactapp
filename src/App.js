import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import Home from './components/Home';
import Main from './components/Main';
import Community from './components/Community';
import Cart from './components/Cart';
import Buy from './components/Buy';
import Search from './components/Search';
import Detail from './components/Detail';
import Infor from './components/Infor';
import Order from './components/Order';
import Collect from './components/Collect';
import Help from './components/Help';
import Set from './components/Set';
import Login from './components/Login';
import Forget from './components/Forget';
import Register from './components/Register';
import Zhuce from './components/Zhuce';
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
							<Route path='/detail' component={Detail}></Route>
	            <Route path='/search' component={Search}></Route>
	            <Route path='/infor' component={Infor}></Route>
	            <Route path='/order' component={Order}></Route>
	            <Route path='/collect' component={Collect}></Route>
	            <Route path='/help' component={Help}></Route>
	            <Route path='/set' component={Set}></Route>
	            <Route path='/login' component={Login}></Route>
	            <Route path='/forget' component={Forget}></Route>
	            <Route path='/register' component={Register}></Route>
	            <Route path='/zhuce' component={Zhuce}></Route>
	            <Redirect to='/home'/>
            </Switch>
          	
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
