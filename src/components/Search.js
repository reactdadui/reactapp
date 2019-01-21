import React from 'react';
import '../css/search.css';
import { SearchBar, WhiteSpace } from 'antd-mobile';
class Search extends React.Component{
	componentDidMount() {
    this.autoFocusInst.focus();
	  }
	  onChange= (value) => {
	    this.setState({ value });
	  };
	  clear = () => {
	    this.setState({ value: '' });
	  };
	  handleClick = () => {
	    this.manualFocusInst.focus();
	  }
    render(){
        return(
            <div className="h-search">
                <SearchBar placeholder="自动获取光标" ref={ref => this.autoFocusInst = ref} /><WhiteSpace />
            </div>
        )
    }
}
export default Search;