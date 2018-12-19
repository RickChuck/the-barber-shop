import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header';

class Cart extends Component{
    constructor(props){
        super(props);
        this.state = {
            cart: {}
        }
    }
    componentDidMount(){
        axios.get('/api/getProducts').then(res => {
            this.setState({
                cart: res.data
            })
        })
    }

    render(){
        
        return(
            <div>
                <div className='header'>
                    <Header/>
                    <Link to='/products'><button>Back</button></Link>
                </div>
                <h1>Cart</h1>
            </div>
        )
    }
}
export default Cart;