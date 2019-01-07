import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header';
import '../Style/Product.scss'
// import { updateProducts } from '../../dux/reducer';
// import { updateCart } from '../../dux/reducer';
// import { connect } from 'react-redux';

class Products extends Component{
    constructor(props){
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount(){
        axios.get('/api/getProducts').then(res => {
            this.setState({
                products: res.data
            })
        })
    }


    async handleCart(id){
       let res = await axios.post(`/api/postProducts/${id}`)
       this.props.updateCart(res.data)
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
                    <button onClick={() => this.handleCart(el.id)} className='cart-button'>Add to Cart</button>
                </div> 
            )
        })
        return(
            <div>
                <div className='header'>
                    <Header/>
                </div>
                <div className='all-products'>
                    <h1>Products</h1>
                    <div className='product-box'>
                        {productsDisplay}
                    </div>
                </div>
            </div>
        )
    }
}


export default Products;