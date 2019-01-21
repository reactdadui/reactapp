import React from 'react';
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
          };
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
          });
        }, 100);
      }
   
    render(){
        return(
            <div className="zujian">
                 <header>
                    
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
                        <dl>
                            <dd className='iconfont icon-31shoucangdedianpu'></dd>
                            <dt>店铺</dt>
                        </dl> 
                        <dl>
                            <dd className='iconfont icon-31shoucangdedianpu'></dd>
                            <dt>分享</dt>
                        </dl> 
                        <dl>
                            <dd className='iconfont icon-31shoucangdedianpu'></dd>
                            <dt>专题</dt>
                        </dl> 
                        <dl>
                            <dd className='iconfont icon-31shoucangdedianpu'></dd>
                            <dt>限时</dt>
                        </dl> 
                        <dl>
                            <dd className='iconfont icon-31shoucangdedianpu'></dd>
                            <dt>美容</dt>
                        </dl> 
                        <dl>
                            <dd className='iconfont icon-31shoucangdedianpu'></dd>
                            <dt>测颜值</dt>
                        </dl> 
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
                    <div className='picture'></div>
                    <ul className='wei'>
                        <li>tupian</li>
                        <li>3333</li>
                        <li>333</li>
                        <li>￥112</li>
                    </ul>
                </section>
                
                
            </div>
        )
    }
}
export default Home;