import React from 'react';
import '../css/pinktop.css';

class PinkTop extends React.Component{
	tap(){
		window.history.go(-1);
	}
    render(){
        return(
            <div className="pinktop">
            	<span className="iconfont icon-fanhui1" onClick={this.tap}></span>
            	<b>{this.props.name}</b>
            </div>
        )
    }
}
export default PinkTop;