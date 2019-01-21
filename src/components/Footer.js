import React from 'react';
import {NavLink} from 'react-router-dom';


class Footer extends React.Component{
    render(){
        return(
                <footer>
				    <NavLink to='/home'><b className="iconfont icon-home2"></b><p>首页</p></NavLink>
				    <NavLink to='/buy'><b className="iconfont icon-nvbao"></b><p>买买买</p></NavLink>
				    <NavLink to='/community'><b className="iconfont icon-xianshihoumai"></b><p>社区</p></NavLink>
				    <NavLink to='/cart'><b className="iconfont icon-gouwucheman"></b><p>购物车</p></NavLink>
				    <NavLink to='/main'><b className="iconfont icon-wodexuanzhong"></b><p>我的</p></NavLink>
				</footer>
        )
    }
}
export default Footer;