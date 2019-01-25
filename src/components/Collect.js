import React from 'react';
import '../css/collect.css';
class Collect extends React.Component{
	tap(){
        this.props.history.push('/main');
    }
    render(){
        return(
            <div className="zujian">
                <header className="d-col"><span onClick={this.tap.bind(this)}>&lt;</span><b>我的收藏</b>
                </header>
                <div className="d-ect">
                	<ul>
                		<li><a href="#">商品</a></li>
                		<li><a href="#">店铺</a></li>
                		
                	</ul>
                </div>
            </div>
        )
    }
}
export default Collect;