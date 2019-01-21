import React from 'react';
import $ from 'jquery';
import {NavLink} from 'react-router-dom';
import '../css/buy.css';
import { Accordion, List } from 'antd-mobile';


class Buy extends React.Component{
	onChange = (key) => {
    console.log(key);
  }
	

  constructor(props){
  	super(props)
  	this.state={
  		list:[]
  	}
  }
    render(){
        return(
          <div className="zujian">
            <div className="a-b">
	            <form className="a-bu">
	               <i className="iconfont icon-sousuo1" ></i>
	               <input type="text"  placeholder="搜索商品" />
	            </form>
	            <i className="iconfont icon-31wangwang" ></i>
            </div>
            
            
            <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
		          <Accordion.Panel header="美容护肤" >
		            <List className="my-list">
			              {
			            	this.state.list.map(function(item,i){
			            		return(
			            			<div key={i}>
			            			   <p><NavLink to="/detail">{item.title}</NavLink></p>
			            			</div>
			            		)
			            	})
			            }
		            </List>
		          </Accordion.Panel>
		          <Accordion.Panel header="时尚彩妆" className="pad1">
		              <List.Item>content 1</List.Item>
		              <List.Item>content 2</List.Item>
		              <List.Item>content 3</List.Item>
		          </Accordion.Panel>
		          <Accordion.Panel header="精油香氛" className="pad2">
		              <List.Item>content 1</List.Item>
		              <List.Item>content 2</List.Item>
		              <List.Item>content 3</List.Item>          
		          </Accordion.Panel>
		          <Accordion.Panel header="身体护理" className="pad3">
		              <List.Item>content 1</List.Item>
		              <List.Item>content 2</List.Item>
		              <List.Item>content 3</List.Item>          
		          </Accordion.Panel>
		          <Accordion.Panel header="男士护肤" className="pad4">
		              <List.Item>content 1</List.Item>
		              <List.Item>content 2</List.Item>
		              <List.Item>content 3</List.Item>          
		          </Accordion.Panel>
		          <Accordion.Panel header="洗发护发" className="pad5">
		              <List.Item>content 1</List.Item>
		              <List.Item>content 2</List.Item>
		              <List.Item>content 3</List.Item>          
		          </Accordion.Panel>
		          <Accordion.Panel header="美容工具" className="pad6">
		              <List.Item>content 1</List.Item>
		              <List.Item>content 2</List.Item>
		              <List.Item>content 3</List.Item>          
		          </Accordion.Panel>
		          <Accordion.Panel header="女性护理" className="pad7">
		              <List.Item>content 1</List.Item>
		              <List.Item>content 2</List.Item>
		              <List.Item>content 3</List.Item>          
		          </Accordion.Panel>
        </Accordion>
            
            
            
          </div>
        )
    }
    
    
    componentWillMount(){
    	var _this=this;
    	$.ajax({
    		type:"get",
    		url:"https://shopapi.meidal.com/Portal/getHome?",
//  		data:{ticket_id:d57f8908ae689422a73e962d74df6395,jsonp_callback:jsonpCallback1548073634569},
    		async:false,
    		
    		success:function(data){
    			console.log(data.info)
			_this.setState({list:data.info.data.enter})
    			
    		}
    	});
    }
}


export default Buy;