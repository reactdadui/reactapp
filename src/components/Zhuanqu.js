import React from 'react';
import PinkTop from './PinkTop';
import {Tabs} from 'antd-mobile';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import Mock from 'mockjs';
Mock.mock('http://reactapp.api/zhuanqu',{
	'dongtai|5-15':[
		{
			'username':'@cword(3,5)',
			'touxiang':'@image(40x40,@color)',
			'time':'@datetime(MM-dd HH:mm)',
			'text':'@cparagraph(1,3)',
			'pics|3':[
				{'img':'@image(100x100,@color)'}
			]
		}
	]
})

class Zhuanqu extends React.Component{
	
	tap(){
		var _this=this;
    	$.ajax({
    		type:"get",
    		url:"http://reactapp.api/zhuanqu",
    		dataType:'json',
    		success:function(data){
    			//console.log(data);
    			_this.setState({
    				dongtai:data.dongtai
    			})
    		}
    	});
	}
	constructor(props){
		super(props);
		this.state={
			dongtai:[]
		}
	}
  
	renderContent = tab =>
    (<div className="h-cont">
      {
      	this.state.dongtai.map(function(item,i){
      		
      		return(
      			<li key={i}>
					<h2 className="h-head">
            			<div className="h-touxiang">
            				<img src={item.touxiang} alt="图片"/>
            			</div>
            			<p>{item.username}</p>
            			<time>{item.time}</time>
            			<div className="h-guanzhu">
            				<span>+</span>
            				<span className="iconfont icon-31wode"></span>
            			</div>
            		</h2>
            		<Link to="zhengwen"><p>{item.text}</p></Link>
            		<Link to="zhengwen"><div className="h-picbox">
            			{
            				item.pics.map(function(item,i){
            					return(
            						<div className="h-img" key={i}>
            							<img src={item.img} alt="图片"/>
            						</div>
            					)
            				})
            			}
            		</div></Link>
            		<div><span className="h-tab">彩妆专区</span></div>
            		<div className="h-libot">
            			<div>
            				<span className="iconfont icon-fenxiang"></span>
            				<b>0</b>
            			</div>
            			<Link to="zhengwen"><div>
            				<span className="iconfont icon-31pinglun"></span>
            				<b>0</b>
            			</div></Link>
            			<div>
            				<span className="iconfont icon-dianzan"></span>
            				<b>0</b>
            			</div>
            		</div>
				</li>
      		)
      	})
      }
    </div>);
    
    render(){
    	//var that=this;
    	const tabs = [
	      { title: '全部' },
	      { title: '面妆' },
	      { title: '眼妆' },
	      { title: '唇妆' },
	      { title: '底妆' }

    	];
        return(
            <div className="zujian">
            	<PinkTop name="专区"/>
            	<Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} onTabClick={this.tap.bind(this,"Tabs.DefaultTabBar.activeTab")}/>} tabBarActiveTextColor="red" tabBarUnderlineStyle={{borderColor:"red"}}>
		        	{this.renderContent}
		        </Tabs>

            </div>
        )
    }
    componentDidMount(){
    	var _this=this;
    	$.ajax({
    		type:"get",
    		url:"http://reactapp.api/zhuanqu",
    		dataType:'json',
    		success:function(data){
    			
    			_this.setState({
    				dongtai:data.dongtai
    			})
    		}
    	});
    }
}
export default Zhuanqu;