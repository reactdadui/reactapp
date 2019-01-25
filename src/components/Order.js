import React from 'react';
import '../css/Order.css';
class Order extends React.Component{
	tap(){
        this.props.history.push('/main');
    }
    render(){
        return(
            <div className="zujian">
                <header className="d-ord"><span onClick={this.tap.bind(this)}>&lt;</span><b>我的订单</b>
                </header>
                <div className="d-list">
                	<ul>
                		<li><a href="#">全部</a></li>
                		<li><a href="#">待付款</a></li>
                		<li><a href="#">待发货</a></li>
                		<li><a href="#">待收货</a></li>
                		<li><a href="#">待评价</a></li>
                	</ul>
                </div>
            </div>
        )
    }
}
export default Order;