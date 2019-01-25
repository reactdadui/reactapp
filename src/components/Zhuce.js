import React from 'react';
import PinkTop from './PinkTop';
import '../css/zhuce.css';
import $ from 'jquery';
class Zhuce extends React.Component{
	constructor(props){
		super(props)
		this.state={
			users:'',
			pass:''
		}
	}
	tap(){
		var _this=this;
		console.log("aa")
		var username=this.refs.tet.value;
		var password=this.refs.pad.value;
		
  		console.log(username,password);
		$.ajax({
			type:'get',
			url:"http://jx.xuzhixiang.top/ap/api/reg.php",
			data:{username:username,password:password},
			dataType:'json',
			success:function(data){
				//console.log(data)
				if(data.code){
					alert(data.msg);
					_this.props.history.push('/login')
				}
			}
		})

	}
    render(){
        return(
            <div className="zujian">            
             	<PinkTop name="注册"/>
             	<section>
             		<div className="d-tub"><span className="iconfont icon-31paishe"></span></div>
             		<div className="d-zhu">
             				<input type="text" placeholder="请输入昵称" ref="tet"/>
             				<input type="password" placeholder="请输入密码" ref="pad"/>
             		</div>
             		<div className="d-zce">
             			<button onClick={this.tap.bind(this)}>提交</button>
             		</div>
             	</section>
            </div>
        )
    }
}
export default Zhuce;