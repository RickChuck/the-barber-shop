import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header';
import '../Style/Cart.scss';
import CheckoutBtn from '../CheckoutBtn/CheckoutBtn';
import deleteIcon from './delete_button.png';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
// import { updateProducts } from '../../dux/reducer';
// import { updateCart } from '../../dux/reducer';
// import { connect } from 'react-redux';


class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cart: [],
            quantity: [],
            show: false
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
            console.log(res)
            this.setState({
                cart: res.data
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
                        <img onClick={() => {this.delete(el.cart_id);this.setState({show:true})}} src={deleteIcon} className='deleteIcon' alt=""></img>
                        <SweetAlert 
                            show={this.state.show}
                            title='Removed from cart'
                            onConfirm={() => this.setState({show: false})}
                            
                        />
                    </div>
                    <div className='quantity'>
                        <button className='hover' onClick={() => this.decrease(el.cart_id, el.quantity)}> — </button>
                        quantity: {el.quantity}
                        <button className='hover' onClick={() => this.increase(el.cart_id, el.quantity)}> ＋ </button>
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
            <div>
                <Header/>
            </div>
            <div className='all-products'>
                <h1 className='cart-title'>Cart</h1>
                <Link to='/products'><button className='back-btn'>Back</button></Link>
                <div className='product-body'>
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