import React from 'react';
import { List } from 'antd-mobile';
import PinkTop from './PinkTop';
import '../css/set.css';
const Item = List.Item;

class Set extends React.Component{
	constructor(props){
    		super(props)
    		this.state = {
			    disabled: false,
			  }
    	}
	tap(){
        this.props.history.push('/main');
    }
	dap(){
		this.props.history.push('/login');
	}
    render(){
    	
        return(
        	<div>
           		<PinkTop name="账户中心"/>
                <section>
          
                	<Item arrow="horizontal" onClick={() => {}}>用户协议及隐私政策</Item>
				   	<Item arrow="horizontal" onClick={() => {}}>关于我们</Item>
				   	<Item arrow="horizontal" onClick={() => {}}>客服电话</Item>
				   	<Item arrow="horizontal" onClick={() => {}}>意见反馈</Item>
				   	<Item extra="1.3.0" arrow="horizontal" onClick={() => {}}>当前版本</Item>
				   	<div className="d-tui" onClick={this.dap.bind(this)}>退出当前账号</div>
                </section>
                
            </div>
        )
    }
}
export default Set;