import React from 'react';
import '../css/community.css';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import { SearchBar, Button, WhiteSpace,PullToRefresh, ListView} from 'antd-mobile';
class Community extends React.Component{
	constructor(props){
		super(props);
	}
	
    render(){
        return(
            <div className="zujian">
            	<header>
            		<Link to='/search'><SearchBar placeholder="搜索" maxLength={8} /></Link>
            	</header>
            	<section>
            		<div className="h-imgbox">这是置顶banner区,点击跳转到精华帖</div>
				    <div className="h-zhuanqu">
				    	<div></div>
				    	<div></div>
				    </div>
	                <h1 className="h-top">社区</h1>
	                <h1 className="h-top">社区</h1>
	                <h1 className="h-top">社区</h1>
	                <h1 className="h-top">社区</h1>
	                <h1 className="h-top">社区</h1>
	                <h1 className="h-top">社区</h1>
	                <h1 className="h-top">社区</h1>
	                <h1 className="h-top">社区</h1>
	                <h1 className="h-top">社区</h1>
	                <h1 className="h-top">社区</h1>
	                <h1 className="h-top">社区</h1>
	                <h1 className="h-top">社区</h1>
	                <h1 className="h-top">社区</h1>
	                <h1 className="h-top">社区</h1>
	                <h1 className="h-top">社区</h1>
	                <h1 className="h-top">社区</h1>
	                <h1 className="h-top">社区</h1>
	                <h1 className="h-top">社区</h1>
	                <h1 className="h-top">社区</h1>
	                <h1 className="h-top">社区</h1>
	                <h1 className="h-top">社区</h1>
	                <h1 className="h-top">社区</h1>
	                <h1 className="h-top">社区</h1>
	                <h1 className="h-top">社区</h1>
	                <h1 className="h-top">社区</h1>
	                <h1 className="h-top">社区</h1>
                </section>
                <Footer/>
            </div>
        )
    }
}
export default Community;