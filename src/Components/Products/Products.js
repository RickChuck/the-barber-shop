import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header';
import '../Style/Product.scss'
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
// import { updateProducts } from '../../dux/reducer';
// import { updateCart } from '../../dux/reducer';
// import { connect } from 'react-redux';

class Products extends Component{
    constructor(props){
        super(props);
        this.state = {
            products: [],
            show: false
        }
        this.handleCart = this.handleCart.bind(this);
    }

    componentDidMount(){
        axios.get('/api/getProducts').then(res => {
            this.setState({
                products: res.data
            })
        })
    }


    async handleCart(product_id){
        console.log(product_id)
       let res = await axios.post(`/api/postProducts/${product_id}`, { quantity: 1})
       console.log(res.data)
    }
    

    // handleState = () => {
    //     axios.post('/api/postProducts', {
    //         products: this.props.products,
    //         cart: this.props.cart
    //     })
    // }
   
    render(){
        let productsDisplay = this.state.products.map((el, i) => {
            // console.log(el)
            return (
                <div key={i} className='product-box'>
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
                    <div className='add-to-cart-div'>
                        <button onClick={() => {this.handleCart(el.product_id,); this.setState({show:true})}} className='cart-button'>ADD TO CART</button>
                        <SweetAlert 
                            show={this.state.show}
                            title='Added to Cart'
                            text='Click on shopping cart to view your item(s)'
                            setTimeout={1000}
                            onConfirm={() => this.setState({show: false})}
                        />
                    </div>
                </div> 
            )
        })
        return(
            <div>
                <div className='header'>
                    <Header/>
                </div>
                <div className='all-products'>
                    <h1 className='product-title'>Products</h1>
                    <div className='product-body'>
                        {productsDisplay}
                    </div>
                </div>
            </div>
        )
    }
}


export default Products;