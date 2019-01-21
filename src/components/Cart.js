import React from 'react';
import Footer from './Footer';
class Cart extends React.Component{
    render(){
        return(
            <div className="zujian">
                <section><h1>购物车</h1></section>
                <Footer/>
            </div>
        )
    }
}
export default Cart;