import React from 'react';
import {NavLink} from 'react-router-dom';
import '../css/login.css';
import $ from 'jquery';
class Login extends React.Component{
	constructor(props){
		super(props)
		this.state={
			users:'',
			pass:''
		}
	}
	tap(){
		this.props.history.push('/forget');
	}
	hsk(){
		this.props.history.push('/register');
	}
	ddd(){
		var _this=this;
		var username=this.refs.ext.value;
		var password=this.refs.ord.value; 
		
		$.ajax({
			type:'get',
			url:"http://jx.xuzhixiang.top/ap/api/login.php",
			data:{username:username,password:password},
			dataType:'json',
			success:function(data){
				console.log(data)
				if(data.code){
					alert(data.msg);
					_this.props.history.push('/home')
				}else{
					alert(data.msg)
				}
			}
		})
	}
    render(){
        return(
            <div className="zujian">
                <header className="d-log"><b>登录</b></header>
                <section>
                	<div className="d-tux">美哒</div>
                
	                <div className="d-zhuce">
	                	<div className="d-txt">
				    		<input type="text" placeholder="请输入昵称" ref="ext"/>
				    	</div>
				    	<div className="d-pas">
				    		<input type="password" placeholder="请输入密码" ref="ord"/>
				    	</div>
				    	<div className="d-reg">
				    		<span onClick={this.tap.bind(this)}>忘记密码?</span>
				    		<b onClick={this.hsk.bind(this)}>注册</b>
				    	</div>
				    	<div className="d-btn">
				    		<button onClick={this.ddd.bind(this)}>登录</button>
				    	</div>
		    		</div>
		    		
	    		</section>
            </div>
        )
    }
}
export default Login;