import React, {Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import cartIcon from './shopping-cart.svg'
import logo from './barber-shop.svg';
import '../Style/Header.scss';

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {}
        
    }

    logout = () => {
        axios.post('/auth/logout').then(res => {
            this.props.history.push('/')
        })
    }

    render(){
        return(
            <div className='Header'>
                <div className='title'>
                    <Link to={'/dashboard'}><img src={logo} alt='' className='logo'/></Link>
                    <h2 className='the_barber_shop'>the Barber Shop</h2>
                </div>
                <button onClick={this.logout}  className='logout'>Logout</button>
                <ul className='nav_bar'>
                        <Link to={'/products'}><button className='shop-btn'>Shop</button></Link>
                        <Link to={'/cart'}><img src={cartIcon} alt='' className='cart'/></Link>
                </ul>
            </div>
        )
    }
}
export default withRouter(Header);
