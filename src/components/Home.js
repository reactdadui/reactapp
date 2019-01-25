import React from 'react';
import Footer from './Footer';
import $ from 'jquery';
import {NavLink} from 'react-router-dom';

// import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';

import { Carousel, WingBlank } from 'antd-mobile';
import "../css/home.css";
class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: '',
            data: ['1', '2', '3'],
            imgHeight: 176,
            detail:[],
            zhuanchang:[],
          };
    }
    componentDidMount() {
        
        // simulate img loading
        var _this=this;
        $.ajax({
            type:'get',
            url:'https://shopapi.meidal.com/Portal/getHome?',
         //    async:'false',
            dataType:'json',
            success:function(data){
                //console.log(data.info.data.special)
                _this.setState({detail:data.info.data.enter})
                _this.setState({zhuanchang:data.info.data.special})
                
             //    console.log(_this.state.detail)
            }
        })
        setTimeout(() => {
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
          });
        }, 100);
      

      }
      componentWillMount(){
       
      }
   
    render(){
        return(
            <div className="zujian">
                 <header className="c-head">
                    
                        <button><span className='iconfont icon-31sousuo'></span></button>
                        <input type='text' placeholder='搜索商品'/>
                    
                    <span className="iconfont icon-31pinglun"></span>
                   
                </header>
                <section>
                    <Carousel
                        autoplay={false}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                        >
                        {this.state.data.map(val => (
                            <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                            <img
                                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                                }}
                            />
                            </a>
                        ))}
                    </Carousel>
                    <div className='list'>
                               {
                                   this.state.detail.map(function(item,i){
                                       return(
                                        <NavLink to={item.relation.replace(" ","")}  key={i}>
                                            <dl>
                                                <dd>
                                                    <img src={'https://shopimg.meidal.com'+item.icon_url}/>
                                                </dd>
                                                <dt>{item.title}</dt>
                                            </dl>
                                        </NavLink>
                                       )
                                   })
                               }
                        {/*<NavLink to='/shop'>
                            <dl>
                                <dd className='iconfont icon-31shoucangdedianpu'></dd>
                                <dt>店铺</dt>
                            </dl>
                        </NavLink>
                         <NavLink to='/share'>
                            <dl>
                                <dd className='iconfont icon-31shoucangdedianpu'></dd>
                                <dt>分享</dt>
                            </dl>
                        </NavLink>
                        <NavLink to='/recommend'>
                            <dl>
                                <dd className='iconfont icon-31shoucangdedianpu'></dd>
                                <dt>专题</dt>
                            </dl>
                        </NavLink>
                        <dl>
                            <dd className='iconfont icon-31shoucangdedianpu'></dd>
                            <dt>限时</dt>
                        </dl> 
                        <NavLink to='/plastic'>
                            <dl>
                                <dd className='iconfont icon-31shoucangdedianpu'></dd>
                                <dt>美容整形</dt>
                            </dl>
                        </NavLink>
                        <dl>
                            <dd className='iconfont icon-31shoucangdedianpu'></dd>
                            <dt>测颜值</dt>
                        </dl>  */}
                    </div>
                    <div className='meida'>
                        <div className='headlines'>
                            <p>美哒</p>
                            <p>头条</p>
                        </div>
                        <div className='special'>
                        <ul>
                             <li>专题</li>       
                             <li>333</li>
                        </ul>        
                        <ul>
                             <li>专题</li>       
                             <li>333</li>
                        </ul>        
                        </div>
                    </div>
                    
                    {
                       
                        this.state.zhuanchang.map(function(item,i){
                            return(
                                <div key={i}>
                                    <NavLink to='/field' className='picture'>
                                    <img src={'https://shopimg.meidal.com'+item.pic_url}/>
                                    </NavLink>
                                    <div className='c-zhuan'>
                                    {
                                        item.goods_list.map(function(ite,s){
                                            return(

                                                <ul className='wei' key={s}>
                                            <li><img src={'https://shopimg.meidal.com'+ite.pic_url}/></li>
                                                    
                                            <li>{ite.product_name}</li>
                                            <li>￥{ite.price}</li>
                                        </ul>
                                            )
                                        })
                                    } 
                                    </div>   
                                       {/* <ul className='wei'>
                                            <li><img src={'https://shopimg.meidal.com'+item.goods_list[0].pic_url}/></li>
                                                    
                                            <li>{item.goods_list[0].product_name}</li>
                                            <li>￥{item.goods_list[0].price}</li>
                                        </ul> */}
                                                   
                                             
                                       
                                    
                                    
                                </div>
                        )
                        })
                    }
                    
                </section>
                <Footer/>
                
            </div>
        )
    }
}
export default Home;