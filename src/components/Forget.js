import React from 'react';
import PinkTop from './PinkTop';
import '../css/forget.css';
class Forget extends React.Component{
    render(){
        return(
            <div className="zujian">            
             	<PinkTop name="忘记密码？"/>
             	<section>
             		<div className="d-for">
             			<span>+86</span>|<input type="text" placeholder="请输入手机号"/>
             		</div>
             		<div className="d-yan">
             			<button>获取验证码</button>
             		</div>
             	</section>
            </div>
        )
    }
}
export default Forget;