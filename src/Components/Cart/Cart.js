import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header';
import '../Style/Cart.scss';
import CheckoutBtn from '../CheckoutBtn/CheckoutBtn';
// import { updateProducts } from '../../dux/reducer';
// import { updateCart } from '../../dux/reducer';
// import { connect } from 'react-redux';


class Cart extends React.Component{
    constructor(){
        super();
        this.state = {
            cart: [],
        }
    }
    async componentDidMount(){
        let res = await axios.get('/api/getCart')
        this.setState({
            cart: res.data
        })
    }

    render(){
        console.log(this.state)
        let cartDisplay = this.state.cart.map((el, i) => {
            return (
                <div key={i}>
                    <div>
                        <img className='image' src={el.img} alt=''/>
                        <hr/>
                        <div className='product-name-price'>
                            <h3 className='product-name'>{el.product_name}</h3>
                            <p className='product-price'>${el.product_price}</p>
                            
                        </div>
                    </div>
                    <div className='product-details'>
                        <p className='product-description'>{el.product_description}</p>
                    </div>
                </div> 
            )
        })
        return(
            <div>
            <div className='header'>
                <Header/>
                <Link to='/products'><button>Back</button></Link>
            </div>
            <div className='all-products'>
                <h1>Cart</h1>
                <div className='product-box'>
                    {cartDisplay}
                </div>
            </div>
            <div className='checkoutBtn'>
                <CheckoutBtn/>
            </div>
        </div>
        )
    }
}


export default Cart;