import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import axios from 'axios';
import '../Style/Auth.scss';
import logo from '../Header/barber-shop.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      hash_value: '',
      loggedInUser: {},
      collapse: false
    }
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.logout = this.logout.bind(this);
    this.toggle = this.toggle.bind(this);
  }

    login = async () => {
    console.log('fired')
    let {username, hash_value} = this.state;
    let res = await axios.post('/auth/login', { username: username, hash_value: hash_value})
    this.setState({ loggedInUser: res.data })
    await this.props.history.push('/dashboard')
  }

  async signup() {
    console.log('fired')
    let {username, hash_value} = this.state;
    let res = await axios.post('/auth/signup', {username: username, hash_value: hash_value})
    this.setState({ loggedInUser: res.data })
    await this.props.history.push('/dashboard')
  }

  async logout() {
    await axios.get('/auth/logout')
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div className="auth-app">
        <div className='auth-title'>
          <img src={logo} alt='' className='authL'/>
          <h2 className='auth-the_barber_shop'>the Barber Shop</h2>
        </div>
        <div className='auth-body'>
          <Button color="primary" onClick={this.toggle} style={{ marginBottom: '3rem' }}>Haircuts</Button>
          <Collapse isOpen={this.state.collapse}>
            <Card>
              <CardBody>
                <div className='the-goat'>
                  <h4>The G.O.A.T</h4>
                  <p>Everything: Haircut, shampoo & conditioner, double steam towel, scalp massage, chair massage, neck shave, wax nose/ears/brows, straight razor shave or beard trim. Includes "Face Buff" treatment.</p>
                </div>
                <div className='the-chairman'>
                  <h4>The Chariman</h4>
                  <p>Haircut, shampoo & conditioner, double steam towel, scalp massage, chair massage, beard trim, neck shave, wax nose/ears/brows.</p>
                </div>
                <div className='the-executive'>
                  <h4>The Executive</h4>
                  <p>Haircut, shampoo & conditioner, double steam towel, scalp massage, chair massage, neck shave</p>
                </div>
                <div className='the-gm'>
                  <h4>The GM</h4>
                  <p>Standard haircut & shampoo</p>
                </div>
                <div className='the-apprentice'>
                  <h4>The Apprentice</h4>
                  <p>Cut + shampoo, for kids 12 and under 
                    *Add a steam towel for $2 more</p>
                </div>
              </CardBody>
            </Card>
          </Collapse>
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