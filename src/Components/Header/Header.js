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
                    {/* <div>Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a> */}
                        <Link to={'/dashboard'}><img src={logo} alt='' className='logo'/></Link>
                        <h2>the Barber Shop</h2>
                    {/* </div> */}
                </div>
                <button onClick={this.logout}>Logout</button>
                <Link to={'/cart'}><img src={cartIcon} alt='' className='cart'/></Link>
                <hr/>
                <Link to={'/products'}><button>Shop</button></Link>
                <hr/>
            </div>
        )
    }
}
export default withRouter(Header);
