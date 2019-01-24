import React from 'react';
import $ from 'jquery'

import "../css/ranking.css";
class Ranking extends React.Component{
    constructor(props){
        super(props)
        this.state={
            puu:[],
            poo:[],
            pss:{store_list:[],user_store_goods:[]},
            temp:[],
        }
    }
    componentDidMount(){
        var _this=this;
        $.ajax({
            type:'get',
            url:'https://shopapi.meidal.com/Store/getStoreList?',
            async:'true',
            dataType:'json',
            success:function(data){
                console.log(data.info.data)
                  _this.setState({puu:data.info.data.store_list})
                  _this.setState({poo:data.info.data.user_store_goods})
                  _this.setState({pss:data.info.data})
              
                
            }
        })
    }
    render(){
        var _this1=this;
        
        return(
            <div className='c-zujian'>
           
                   
             {
                this.state.pss.store_list.map(function(item,i){
                    let jsx=[];
                    let length =_this1.state.pss.user_store_goods[item.user_store_id].length;
                    for(let i =0;i<length;i++){
                            console.log(_this1.state.pss.user_store_goods[item.user_store_id][i].pic_url);
                        jsx.push(<dl key={i}>
                            <dt><img src={"https://shopimg.meidal.com"+_this1.state.pss.user_store_goods[item.user_store_id][i].pic_url}/></dt>
                            <dd>￥{_this1.state.pss.user_store_goods[item.user_store_id][i].price}</dd>
                            </dl>)
                    }   
                    return(
                    <div className='c-sh' key={i}>
                        <div className='c-top'>
                            <div className='c-tu'><img src={item.user_avatar}/></div>
                                <ul>
                                    <li><h2>{item.store_name}</h2></li>
                                    <li><span>销售量{item.store_level}</span><span>共{item.goods_amount}件宝贝</span><span>关注量{item.is_online_star}</span></li>
                                </ul>
                            <span className='c-jin'>进店</span>
                        </div>
                    <div className='c-bottom'>
                           {jsx};
                    </div>
                </div>
                    )
                })
            }
               
                
            </div>
        )
    }
}





export default Ranking;