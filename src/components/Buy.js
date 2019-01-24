import React from 'react';
import Footer from './Footer';
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
  		list1:[],
  		list2:[],
  		list3:[],
  		list4:[],
  		list5:[],
  		list6:[],
  		list7:[],
  		list8:[]
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
            
            <section>
            <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
		          <Accordion.Panel header="美容护肤" >
		            <List className="my-list">
                        
		            
			              {
			            	this.state.list1.map(function(item,i){
			            		return(
			            			<div key={i} className="my-u">
				            			<ul className="my-a">
						                   <li>
						                      
						                      <img src={"https://shopimg.meidal.com"+item.pic_url}/>
						                      <p><NavLink to={"/lists/"+item.cid}>{item.cname}</NavLink></p>
						                   </li>
						                </ul>
			            			</div>
			            		)
			            	})
			            }
		            </List>
		          </Accordion.Panel>
		          <Accordion.Panel header="时尚彩妆" className="pad1">
		              {
			            	this.state.list2.map(function(item,i){
			            		return(
			            			<div key={i} className="my-u">
				            			<ul className="my-a">
						                   <li>
						                     <img src={"https://shopimg.meidal.com"+item.pic_url}/>
						                      <p><NavLink to={"/lists/"+item.cid}>{item.cname}</NavLink></p>
						                   </li>
						                </ul>
			            			</div>
			            		)
			            	})
			            }
		          </Accordion.Panel>
		          <Accordion.Panel header="精油香氛" className="pad2">
		              {
			            	this.state.list3.map(function(item,i){
			            		return(
			            			<div key={i} className="my-u">
				            			<ul className="my-a">
						                   <li>
						                      <img src={"https://shopimg.meidal.com"+item.pic_url}/>
						                      <p><NavLink to={"/lists/"+item.cid}>{item.cname}</NavLink></p>
						                   </li>
						                </ul>
			            			</div>
			            		)
			            	})
			            }
		          </Accordion.Panel>
		          <Accordion.Panel header="身体护理" className="pad3">
		              {
			            	this.state.list4.map(function(item,i){
			            		return(
			            			<div key={i} className="my-u">
				            			<ul className="my-a">
						                   <li>
						                      <img src={"https://shopimg.meidal.com"+item.pic_url}/>
						                      <p><NavLink to={"/lists/"+item.cid}>{item.cname}</NavLink></p>
						                   </li>
						                </ul>
			            			</div>
			            		)
			            	})
			            }         
		          </Accordion.Panel>
		          <Accordion.Panel header="男士护肤" className="pad4">
		              {
			            	this.state.list5.map(function(item,i){
			            		return(
			            			<div key={i} className="my-u">
				            			<ul className="my-a">
						                   <li>
						                      <img src={"https://shopimg.meidal.com"+item.pic_url}/>
						                      <p><NavLink to={"/lists/"+item.cid}>{item.cname}</NavLink></p>
						                   </li>
						                </ul>
			            			</div>
			            		)
			            	})
			            }     
		          </Accordion.Panel>
		          <Accordion.Panel header="洗发护发" className="pad5">
		              {
			            	this.state.list6.map(function(item,i){
			            		return(
			            			<div key={i} className="my-u">
				            			<ul className="my-a">
						                   <li>
						                      <img src={"https://shopimg.meidal.com"+item.pic_url}/>
						                      <p><NavLink to={"/lists/"+item.cid}>{item.cname}</NavLink></p>
						                   </li>
						                </ul>
			            			</div>
			            		)
			            	})
			            }
		          </Accordion.Panel>
		          <Accordion.Panel header="美容工具" className="pad6">
		              {
			            	this.state.list7.map(function(item,i){
			            		return(
			            			<div key={i} className="my-u">
				            			<ul className="my-a">
						                   <li>
						                      <img src={"https://shopimg.meidal.com"+item.pic_url}/>
						                      <p><NavLink to={"/lists/"+item.cid}>{item.cname}</NavLink></p>
						                   </li>
						                </ul>
			            			</div>
			            		)
			            	})
			            }        
		          </Accordion.Panel>
		          <Accordion.Panel header="女性护理" className="pad7">
		              {
			            	this.state.list8.map(function(item,i){
			            		return(
			            			<div key={i} className="my-u">
				            			<ul className="my-a">
						                   <li>
						                      <img src={"https://shopimg.meidal.com"+item.pic_url}/>
						                      <p><NavLink to={"/lists/"+item.cid}>{item.cname}</NavLink></p>
						                   </li>
						                </ul>
			            			</div>
			            		)
			            	})
			            }      
		          </Accordion.Panel>
        </Accordion>
        </section>
        <Footer/>  
            
            
          </div>
        )
    }
    
    
   componentWillMount(){
    	var _this=this;
    	$.ajax({
    		type:"get",
    		url:"https://shopapi.meidal.com/Goods_Category/getTotalCategory?",
    		async:false,  		
    		success:function(data){
    			console.log(data.info)
    			console.log(data.info.data[1].two_Category_list)
			_this.setState({
				list1:data.info.data[0].two_Category_list,
				list2:data.info.data[1].two_Category_list,
				list3:data.info.data[2].two_Category_list,
				list4:data.info.data[3].two_Category_list,
				list5:data.info.data[4].two_Category_list,
				list6:data.info.data[5].two_Category_list,
				list7:data.info.data[6].two_Category_list,
				list8:data.info.data[7].two_Category_list
			
			})
    			
    		}
    	});
    	
    }
}


export default Buy;