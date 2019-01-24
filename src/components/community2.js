import React from 'react';
import PinkTop from './PinkTop';
//import {Link} from 'react-router-dom';
import $ from 'jquery';
import Mock from 'mockjs';
import {ActionSheet, Toast} from 'antd-mobile';
/*var Random=Mock.Random;
Random.extend({
    zhuanqu: function(date) {
        var constellations = ['护肤专区', '彩妆专区']
        return this.pick(constellations)
    }
})*/
Mock.mock('http://reactapp.api/pinglun',{
	'pinglun|3-8':[
		{
			'username':'@cword(3,5)',
			'touxiang':'@image(40x40,@color)',
			'time':'@datetime(MM-dd HH:mm)',
			'text':'@cparagraph(1,2)',
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
			zhengwen:{}
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
	                			<div className="h-touxiang">头像</div>
	                			<p>这是昵称</p>
	                			<time>01-22 09:00</time>
	                			<div className="h-guanzhu">
	                				<span>+</span>
	                				<span className="iconfont icon-31wode"></span>
	                			</div>
	                		</h2>
	                		<p>这是一段话<br/>一共三行吧<br/>超出显示省略号</p>
	                		
	                		<div className="h-picbox">
	                			<div className="h-img">图片1</div>
	                			<div className="h-img">图片2</div>
	                			<div className="h-img">图片3</div>
	                		</div>
	                		<div><span className="h-tab">彩妆专区</span></div>
	                		
	                	</li>
	                </ul>
	                <div className="pinglun">
	                	<h3>评论<span>1</span></h3>
	                	<ul>
	                		<li>
	                			<div className="h-pingl">
	                				<div className="h-touxiang"></div>
	                			</div>
	                			<div className="h-pingr">
	                				<h4>用户昵称</h4>
		                			<p className="h-pingyu">这是评论的内容....这是评论的内容....这是评论的内容....这是评论的内容..这是评论的内容....这是评论的内容....这是评论的内容....这是评论的内容......</p>
		                			<div className="h-pingtime">
			                			<time>01-22 09:00</time>
			                			<a href="#">
					        				<span className="iconfont icon-dianzan"></span>
					        				<b>0</b>
					        			</a>
					        			<a href="#">
					        				<span className="iconfont icon-31pinglun"></span>
					        				
					        			</a>
					        		</div>
				        		</div>
	                		</li>
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
    				zhengwen:data.zhengwen
    			})
    			//console.log(_this.state)
    		}
    	})
    }
}
export default Zhengwen;