import React from 'react';
import '../css/community.css';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import { SearchBar,ActionSheet, Toast} from 'antd-mobile';
import $ from 'jquery';
import Mock from 'mockjs';

Mock.mock('http://reactapp.api/shequ',{
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
	],
	'banner':{'img':'@image(300x100,@color)'},
	'zhuanquimg|2':[{'img':'@image(100x50,@color)'}]
})

class Community extends React.Component{
	constructor(props){
		super(props);
		this.state={
			dongtai:[],
			banner:'',
			zhuanquimg:[]
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
        Toast.info('分享成功');
        setTimeout(resolve, 1000);
      });
    });
  }
    render(){
    	
    	var the=this;
        return(
            <div className="zujian">
            	<header className="h-header">
            		<Link to='/search'><SearchBar placeholder="搜索" maxLength={8} /></Link>
            	</header>
            	<section>
            		<div className="h-imgbox">
            			<img src={this.state.banner} alt="图片"/>
            		</div>
				    <div className="h-zhuanqu">
				    	{
				    		this.state.zhuanquimg.map(function(item,i){
				    			return(
				    				<Link to="/zhuanqu" key={i}><div><img src={item.img} alt="图片"/></div></Link>
				    			)
				    		})
				    	}
				    	
				    </div>
				    <h3 className="h-h3">热门帖子推荐</h3>
	                <ul className="h-cont">
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
				                			<div onClick={the.showShareActionSheet}>
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
	                </ul>
                </section>
                <Footer/>
            </div>
        )
    }
    componentDidMount(){
    	var _this=this;
    	$.ajax({
    		type:'get',
    		url:'http://reactapp.api/shequ',
    		dataType:'json',
    		success:function(data){
    			_this.setState({
    				dongtai:data.dongtai,
    				banner:data.banner.img,
    				zhuanquimg:data.zhuanquimg
    			})
    			
    		}
    	})
    }
}
export default Community;