import React from 'react';
import $ from 'jquery';

import "../css/recommend.css";

class Subject extends React.Component{
        constructor(props){
            super(props)
            this.state={
                stu:[],
            }
        }

        componentDidMount(){
            var _this=this;
            $.ajax({
                type:'get',
                url:'https://shopapi.meidal.com/Topic/getRecommendList?',
                async:'true',
                dataType:'json',
                success:function(data){
                    console.log(data.info.data);
                       _this.setState({stu:data.info.data})
                }
            })
        }
    tap(){
        this.props.history.push('/home')
    }
    render(){
        return(
            <div className='zujian'>
               <header className='c-header'>
                <span className='iconfont icon-31fanhui1' onClick={this.tap.bind(this)}></span>
                <h3>专题</h3>
               </header>
               <section>
                   <h2>美哒专题</h2>
                   <div className='c-da'>
                       <ul>
                           <li><span>美白提亮</span></li>
                           <li><span>美白提亮</span></li>
                           <li><span>美白提亮</span></li>
                       </ul>
                   </div>
                   <h2>为您推荐</h2> 
                    {/* <div  dangerouslySetInnerHTML={{ __html:this.state.stu}}></div>  */}
                    {
                        this.state.stu.map(function(item,i){
                            return(
                                <div className='tui' key={i}>
                                    <ul>
                                        <li>{item.title}</li>
                                        <li>{item.content}</li>
                                        <li>{item.views_number}{item.comments_number}</li>
                                    </ul>
                                    <div>
                                       <img src={'https://shopimg.meidal.com'+item.small_pic_url}/>
                                    </div>
                                </div>
                            )
                        })
                    }
                   
               </section>
            </div>
        )
    }
}





export default Subject;