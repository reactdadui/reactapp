import React from 'react';
import '../css/infor.css';
import { List } from 'antd-mobile';
import PinkTop from './PinkTop';
const Item = List.Item;
const Brief = Item.Brief;
class Infor extends React.Component{
	constructor(props){
    		super(props)
    		this.state = {
			    disabled: false,
			  }
    	}
	tap(){
        this.props.history.go(-1);
    }

    render(){
        return(
            <div className="zujian">
                <PinkTop name="个人信息"/>
                <section>
                	<aside className="d-dd"></aside>
                	<div className="d-pic">
                		<span>头像</span>
                		<div className="pic-1">头像</div>
                	</div>
                	<div className="d-cen">
                		<span>封面</span>
                		<div className="d-feng"></div>
                	</div>
                	
				    <Item extra="请输入姓" arrow="horizontal" onClick={() => {}}>姓</Item>
				    <Item extra="请输入名" arrow="horizontal" onClick={() => {}}>名</Item>
				    <Item extra="昵称" arrow="horizontal" onClick={() => {}}>昵称</Item>
				    <Item extra="手机号" arrow="horizontal" onClick={() => {}}>手机</Item>   
				   	<Item extra="请选择性别" arrow="horizontal" onClick={() => {}}>性别</Item>
				   	<Item extra="请选择出生日期" arrow="horizontal" onClick={() => {}}>生日</Item>
				   	<Item extra="未知" arrow="horizontal" onClick={() => {}}>皮肤问题</Item>
				   	<Item extra="请输入护照号" arrow="horizontal" onClick={() => {}}>证件</Item>
				   	<Item extra="请输入您的email" arrow="horizontal" onClick={() => {}}>E-mail</Item>
				   	<Item extra="请输入个性签名" arrow="horizontal" onClick={() => {}}>个性签名</Item>
				   	<Item arrow="horizontal" onClick={() => {}}>我的实名认证</Item>
				   	<Item arrow="horizontal" onClick={() => {}}>我的收货地址</Item>
				   	<div className="d-de"></div>
                </section>
            </div>
        )
    }
}
export default Infor;