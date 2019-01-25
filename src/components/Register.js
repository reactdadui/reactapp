import React from 'react';
import PinkTop from './PinkTop';
import '../css/register.css';
class Register extends React.Component{
	tap() {
            var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
            if (!myreg.test(this.refs.ipt.value)) {
            	alert("操作异常，请重新输入手机号")
                return false;
            } else {
            	this.props.history.push('/zhuce');
                return true;
            }
            
        }
    render(){
        return(
            <div className="zujian">            
             	<PinkTop name="注册"/>
             	<section>
             		<div className="d-rgs">
             			<span>+86</span>|<input type="text" placeholder="请输入手机号" ref="ipt"/>
             		</div>
             		<div className="d-yzm">
             			<button onClick={this.tap.bind(this)}>获取验证码</button>
             		</div>
             		<div className="d-yue">
             			<p>选中即表示已阅读且接受该协议</p>
             			<input type="checkbox" name="like"/>阅读用户协议及隐私政策
             		</div>
             	</section>
            </div>
        )
    }
}
export default Register;