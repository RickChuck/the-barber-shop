import React, { Component } from 'react';
import axios from 'axios';
import '../Style/Auth.scss';
import logo from '../Header/barber-shop.svg';
import backgroundImg from '../Style/images/barbshop.jpg';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      hash_value: '',
      loggedInUser: {},
    }
  }

    login = async () => {
    // console.log('fired')
    let {username, hash_value} = this.state;
    let res = await axios.post('/auth/login', { username: username, hash_value: hash_value})
    this.setState({ loggedInUser: res.data })
    await this.props.history.push('/dashboard')
  }

  signup = async () => {
    // console.log('fired')
    let {username, hash_value} = this.state;
    let res = await axios.post('/auth/signup', {username: username, hash_value: hash_value})
    this.setState({ loggedInUser: res.data })
    await this.props.history.push('/dashboard')
  }

  logout = async () => {
    await axios.get('/auth/logout')
  }


  render() {
    return (
      <div className="auth-app">
        <img className='backgroundImg' src={backgroundImg} alt='barbs'/>
        <div className='auth-title'>
          <img src={logo} alt='' className='authL'/>
          <h2 className='auth-the_barber_shop'>the Barber Shop</h2>
        </div>
        <div className='auth-login'>
          <p>Username: <input onChange={(e) => this.setState({username: e.target.value})} type='text' /></p>
          <p>Password: <input onChange={(e) => this.setState({hash_value: e.target.value})} type='password' /></p>
          <button onClick={() => this.login()}>Login </button>
          <button onClick={() => this.signup()}>Sign Up</button>
        </div>
      </div>
    );
  }
}

export default App;