import React from 'react';
import Footer from './Footer';
import {NavLink} from 'react-router-dom';
import '../css/main.css';
class Main extends React.Component{
    render(){
        return(
            <div className="zujian">
                <header className="d-header">
                	<div className="d-touxiang">头像</div>
                	<p>用户名&gt;</p>
                </header>
                <section>
                	<aside className="d-aside">
                		<span>我的订单</span>
                		<em>查看全部订单&gt;</em>
                	</aside>
                
	                <div className="d-nav">
	                	<NavLink to='/#'><b className="iconfont icon-daifukuan"></b><p>代付款</p></NavLink>
	                	<NavLink to='/#'><b className="iconfont icon-daifahuo"></b><p>代发货</p></NavLink>
	                	<NavLink to='/#'><b className="iconfont icon-daishouhuo"></b><p>代收货</p></NavLink>
	                	<NavLink to='/#'><b className="iconfont icon-31pinglun"></b><p>代评价</p></NavLink>
	                	<NavLink to='/#'><b className="iconfont icon-daifukuan"></b><p>退款/退货</p></NavLink>
	                </div>
	                <div className="hang"></div>
	                <article className="d-article">
	                	<NavLink to='/#'><b className="iconfont icon-shoucang"></b><p>我的收藏</p>&gt;</NavLink>
	                	<NavLink to='/#'><b className="iconfont icon-youhuiquan"></b><p>我的优惠券</p>&gt;</NavLink>
	                	<NavLink to='/#'><b className="iconfont icon-31tishi1"></b><p>帮助中心</p>&gt;</NavLink>
	                	<NavLink to='/#'><b className="iconfont icon-dianpu"></b><p>我要开店</p>&gt;</NavLink>
	                	<NavLink to='/#'><b className="iconfont icon-shezhi"></b><p>设置</p>&gt;</NavLink>
	                </article>
                </section>
	            <Footer/>
            </div>
            
        )
    }
}
export default Main;