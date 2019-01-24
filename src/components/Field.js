import React from 'react';
import "../css/field.css";
import {NavLink} from 'react-router-dom';
class Field extends React.Component{
    tap(){
        this.props.history.push('/home')
    }
    render(){
        return(
            
            <div className='zujian'>
                <header className='c-tou'>
                    <div className='c-header'>
                        <span className='iconfont icon-31fanhui1' onClick={this.tap.bind(this)}></span>
                        <h3>专场</h3>
                    </div>
                </header>
                <section>
                    <NavLink to='/gouwuche'>
                        <p>ww</p>
                        <p>wwww</p>
                    </NavLink>
                </section>
            </div>
        )
    }
}




export default Field;