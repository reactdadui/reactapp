import React from 'react';
import $ from 'jquery';
import {NavLink} from 'react-router-dom';
import '../css/list.css';
class Lists extends React.Component{
	constructor(props){
		super(props)
		this.state={
			lists:[]
		}
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
                <section className="tca">
               {
			            	this.state.lists.map(function(item,i){
			            		return(
			            			
			            			<div className="tot" key={i}>
			            			   
			            				<img className="ttt" src={"https://shopimg.meidal.com"+item.pic_url} alt="图片"/>
			            				<p><NavLink to={"/detail/"+item.goods_id}>{item.product_name}</NavLink></p>
			            				<p className="tgg">${item.price}</p>
			            				
			            			</div>
			            		)
			            	})
			    }
               </section>
            </div>
        )
    }
    componentDidMount(){
    	console.log(this.props)
    	console.log(this.props.match.params.id)
    	var _this=this;
    	$.ajax({
    		type:"get",
    		url:"https://shopapi.meidal.com/Goods/getGoodsListByCid?",
    		async:false,
    		dataType:'json',
    		data:{cid:_this.props.match.params.id},
    		success:function(data){
    			console.log(data.info.data)
    			_this.setState({lists:data.info.data})
    			
    		}
    	});
    }
}





export default Lists;