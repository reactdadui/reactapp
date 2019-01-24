import React from 'react';
import $ from 'jquery'
import {NavLink} from 'react-router-dom';
import '../css/detail.css';

class Detail extends React.Component{
	constructor(props){
		super(props)
		this.state={
			detail:'',
			arr:'',
			arr1:'',
			arr2:''
		}
	}
	
	mop(){
		console.log(1232)
	
	}
    render(){
        return(
            <div className="zujian">
                 <div className="aaaa">
		            <form className="a-bu">
		               <i className="iconfont icon-sousuo1" ></i>
		               <input type="text"  placeholder="搜索商品" />
		            </form>
		            <i className="iconfont icon-31wangwang" ></i>
                </div>
                <section>
		            <img  className="pic" src={"http://shopimg.meidal.com"+this.state.arr}/>
		            <p className="p1">{this.state.detail}</p>
		            <h2 className="p2">${this.state.arr2}</h2>
		            <div className="p3"> 
		              <span>商品详情</span>
		              <span>商品参数</span>
		              
		            </div>
		            <div  dangerouslySetInnerHTML={{ __html:this.state.arr1}}></div> 
	            </section>
	            <footer >
		            <div className="ff">
			              <span onClick={this.mop.bind(this)}><i className="iconfont icon-shoucangxuanzhong" ></i></span>
			              <div>
				              <input type="button" id="btn1" value="加入购物车" />
					          <input type="button" id="btn2" value="立即购买" />
				          </div>
			         </div>
	            </footer>
            </div>
        )
    }
    componentDidMount(){
    	console.log(this.props)
    	console.log(this.props.match.params.IP)
    	var _this=this;
    	$.ajax({
    		type:"get",
    		url:"https://shopapi.meidal.com/Goods/detail?",
    		async:false,
    		dataType:'json',
    		data:{goods_id:_this.props.match.params.IP},
    		success:function(data){
    			console.log(data.info.data)
    			console.log(data.info.data.product_name)
    			_this.setState({
    				detail:data.info.data.product_name,
    				arr:data.info.data.pic_url,
    				arr1:data.info.data.content,
    				arr2:data.info.data.price,
    				
    				
    				
    			})

    		}
    	});
    	
    }
}
export default Detail;