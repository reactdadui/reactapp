import React from 'react';
import {NavLink} from 'react-router-dom';
import Ranking from './Ranking';
import Sales from './Sales';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import "../css/shop.css";

class StoreList extends React.Component{


    tap(){
        this.props.history.push('/home')
    }
    render(){
        return(
            <div className='zujian'>
               <header className='c-tou'>
                <div className='c-header'>
                    <span className='iconfont icon-31fanhui1' onClick={this.tap.bind(this)}></span>
                    <h3>店铺</h3>
                </div>
                {/* <div className='c-van'>
                    <p><span>综合排行</span><span>销量优先</span></p>
                </div> */}
               </header>
               <Router>
                <section>
                    <div className='c-dian'>
                        <NavLink to='/ranking'><span>综合排行</span></NavLink>
                        <NavLink to='/sales'><span>销量优先</span></NavLink>
                    </div>
                        <Route path='/ranking' component={Ranking}></Route>
                        <Route path='/sales' component={Sales}></Route>
                        <Redirect to='/ranking'/>
                </section>
               </Router>
            </div>
        )
    }
}





export default StoreList;