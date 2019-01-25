import React from 'react';
import { List } from 'antd-mobile';
import '../css/help.css';
const Item = List.Item;
const Brief = Item.Brief;
class Help extends React.Component{
	constructor(props){
    		super(props)
    		this.state = {
			    disabled: false,
			  }
    	}
	tap(){
        this.props.history.push('/main');
    }
    render(){
        return(
            <div className="zujian">
                <header className="d-hlp"><span onClick={this.tap.bind(this)}>&lt;</span><b>帮助中心</b>
                </header>
                <section>
                	<Item arrow="horizontal" onClick={() => {}}>跨境电商小知识</Item>
				   	<Item arrow="horizontal" onClick={() => {}}>跨境电商综合税表</Item>
				   	<Item arrow="horizontal" onClick={() => {}}>收到商品不满意,能否退货?</Item>
				   	<Item arrow="horizontal" onClick={() => {}}>为何要实名认证?</Item>
                </section>
            </div>
        )
    }
}
export default Help;