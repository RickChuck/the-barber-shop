import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header';
import '../Style/Cart.scss';
import CheckoutBtn from '../CheckoutBtn/CheckoutBtn';
import deleteIcon from './delete_button.png';
// import { updateProducts } from '../../dux/reducer';
// import { updateCart } from '../../dux/reducer';
// import { connect } from 'react-redux';


class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cart: [],
            quantity: []
        }
        this.delete = this.delete.bind(this);
        this.handleQuantity = this.handleQuantity.bind(this);
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }

    async componentDidMount(){
        let res = await axios.get(`/api/getCart`)
        this.setState({
            cart: res.data
        })
    }

    delete = (cart_id) => {
        console.log(cart_id)
        axios.delete(`/api/deleteItem/${cart_id}`)
        .then(res => {
            console.log(res)
            this.setState({
                cart: res.data
            })
        })
    }

    async handleQuantity(cart_id, quantity) {
        await axios.put(`/api/updateQuantity/${cart_id}`, {quantity})
        .then((res) => {
            this.setState({
                quantity: res.data
            })
            // this.reload()
        })
    }
    // reload() {
    //     window.location.reload()
    // }


    increase = (cart_id, quantity) => {
        this.handleQuantity(cart_id, quantity + 1)
    }

    decrease = (cart_id, quantity) => {
        this.handleQuantity(cart_id, quantity - 1)
    }

    render(){
        console.log(this.state.quantity)
        let cartDisplay = this.state.cart.map((el, i) => {
            return (
                <div key={i} className='product-box'>
                    <div>
                        <img onClick={() => this.delete(el.cart_id)} src={deleteIcon} className='deleteIcon' alt=""/>
                    </div>
                    <div className='quantity'>
                        <button onClick={() => this.decrease(el.cart_id, el.quantity)}> — </button>
                            quantity: {el.quantity}
                        <button onClick={() => this.increase(el.cart_id, el.quantity)}> ＋ </button>
                    </div>
                    <hr/>
                    <div >
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
                <div>
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