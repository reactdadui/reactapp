import React from 'react';
import { ActionSheet, WingBlank, WhiteSpace, Button, Toast } from 'antd-mobile';
import {NavLink} from 'react-router-dom';
import Ma from './Ma';
import Chengguo from './Chengguo';
import Guize from './Guize';
import "../css/share.css";
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom';

class InvitedMember extends React.Component{
    constructor(props){
        super(props)
            this.state = {
                clicked: 'none',
                clicked1: 'none',
                clicked2: 'none',
              };
          
        
    }

    tap(){
        this.props.history.push('/home')
    }
    dataList = [
        { url: 'OpHiXAcYzmPQHcdlLFrc', title: '发送给朋友' },
        { url: 'wvEzCMiDZjthhAOcwTOu', title: '新浪微博' },
        { url: 'cTTayShKtEIdQVEMuiWt', title: '生活圈' },
        { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
        { url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' },
      ].map(obj => ({
        icon: <img src={`https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`} alt={obj.title} style={{ width: 36 }} />,
        title: obj.title,
      }));
    
    
      showShareActionSheet = () => {
        ActionSheet.showShareActionSheetWithOptions({
          options: this.dataList,
          // title: 'title',
          message: 'I am description, description, description',
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
            <div className='zujian'>
               <header className='c-tou'>
                <div className='c-header'>
                    <span className='iconfont icon-31fanhui1' onClick={this.tap.bind(this)}></span>
                    <h3>分享注册赚美哒币</h3>
                    <span className='iconfont icon-gengduo1' onClick={this.showShareActionSheet}></span>
                </div>
                {/* <div className='c-van'>
                    <p><span>综合排行</span><span>销量优先</span></p>
                </div> */}
               </header>
               <Router>
                <section>
                    <div className='c-dian'>
                        <NavLink to='/ma'><span>我的分享码</span></NavLink>
                        <NavLink to='/chengguo'><span>分享成果</span></NavLink>
                        <NavLink to='/guize'><span>分享规则</span></NavLink>
                    </div>
                        <Route path='/ma' component={Ma}></Route>
                        <Route path='/chengguo' component={Chengguo}></Route>
                        <Route path='/guize' component={Guize}></Route>
                        <Redirect to='/ma'/>
                </section>
               </Router>
            </div>
        )
    }
}





export default InvitedMember;