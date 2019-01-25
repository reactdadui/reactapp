import React from 'react';
import PinkTop from './PinkTop';
import $ from 'jquery';
import Mock from 'mockjs';
import {ActionSheet, Toast} from 'antd-mobile';

Mock.mock('http://reactapp.api/pinglun',{
	'pinglun|3-8':[
		{
			'username':'@cword(3,5)',
			'touxiang':'@image(40x40,@color)',
			'time':'@datetime(MM-dd HH:mm)',
			'text':'@cparagraph(1,2)'
		}
	],
	'zhengwen':
		{
			'username':'@cword(3,5)',
			'touxiang':'@image(40x40,@color)',
			'time':'@datetime(MM-dd HH:mm)',
			'text':'@cparagraph(3,20)',
			'pics|1-9':[
				{'img':'@image(100x100,@color)'}
			]
		}
	
})
class Zhengwen extends React.Component{
	constructor(props){
		super(props);
		this.state={
			pinglun:[],
			zhengwen:{},
			pics:[]
		}
	}
dataList = [
    { url: 'OpHiXAcYzmPQHcdlLFrc', title: '发送给朋友' },
    { url: 'wvEzCMiDZjthhAOcwTOu', title: '新浪微博' },
    { url: 'cTTayShKtEIdQVEMuiWt', title: '生活圈' },
    { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信' },
    { url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' },
  ].map(obj => ({
    icon: <img src={`https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`} alt={obj.title} style={{ width: 36 }} />,
    title: obj.title,
  }));


  showShareActionSheet = () => {
    ActionSheet.showShareActionSheetWithOptions({
      options: this.dataList,
      // title: 'title',
      message: '分享到',
    },
    (buttonIndex) => {
      this.setState({ clicked1: buttonIndex > -1 ? this.dataList[buttonIndex].title : 'cancel' });
      // also support Promise
      return new Promise((resolve) => {
        Toast.info('closed after 1000ms');
        setTimeout(resolve, 1000);
      });
    });
  }
    render(){
        return(
            <div className="zujian">
            	<PinkTop name="帖子正文"/>
                <section>
                	<ul className="h-cont">
                		<li>
	                		<h2 className="h-head">
	                			<div className="h-touxiang">
	                				<img src={this.state.zhengwen.touxiang} alt="图片"/>
	                			</div>
	                			<p>{this.state.zhengwen.username}</p>
	                			<time>{this.state.zhengwen.time}</time>
	                			<div className="h-guanzhu">
	                				<span>+</span>
	                				<span className="iconfont icon-31wode"></span>
	                			</div>
	                		</h2>
	                		<p>{this.state.zhengwen.text}</p>
	                		
	                		<div className='h-picbox'>
	                			{
		                			this.state.pics.map(function(item,i){
		                				return(
		                					<div className="h-img" key={i}>
		                						<img src={item.img} alt="图片"/>
		                					</div>
		                				)
		                				
		                			})
		                		}
	                		</div>
	                		<div><span className="h-tab">彩妆专区</span></div>
	                		
	                	</li>
	                </ul>
	                
	                <div className="pinglun">
	                	<h3>评论<span>{this.state.pinglun.length}</span></h3>
	                	<ul>
	                		{
			                	this.state.pinglun.map(function(item,i){
			                		return(
			                			<li key={i}>
				                			<div className="h-pingl">
				                				<div className="h-touxiang">
				                					<img src={item.touxiang} alt="图片"/>
				                				</div>
				                			</div>
				                			<div className="h-pingr">
				                				<h4>{item.username}</h4>
					                			<p className="h-pingyu">{item.text}</p>
					                			<div className="h-pingtime">
						                			<time>{item.time}</time>
						                			<i>
								        				<span className="iconfont icon-dianzan"></span>
								        				<b>0</b>
								        			</i>
								        			<i>
								        				<span className="iconfont icon-31pinglun"></span>
								        				
								        			</i>
								        		</div>
							        		</div>
				                		</li>
			                		)
			                	})
			                }
	                	</ul>
	                </div>
                </section>
                <div className="h-ulbot">
        			<div onClick={this.showShareActionSheet}>
        				<span className="iconfont icon-fenxiang"></span>
        				<b>分享</b>
        			</div>
        			<div>
        				<span className="iconfont icon-31pinglun"></span>
        				<b>评论</b>
        			</div>
        			<div>
        				<span className="iconfont icon-dianzan"></span>
        				<b>赞</b>
        			</div>
        		</div>
            </div>
        )
    }
    componentDidMount(){
    	var _this=this;
    	$.ajax({
    		type:'get',
    		url:'http://reactapp.api/pinglun',
    		dataType:'json',
    		success:function(data){
    			_this.setState({
    				pinglun:data.pinglun,
    				zhengwen:data.zhengwen,
    				pics:data.zhengwen.pics
    			})
    		}
    	})
    }
}
export default Zhengwen;