import React, { Component } from 'react';
import axios from 'axios';

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
    let {username} = this.state;
    let res = await axios.post('/auth/login', { username: username})
    this.setState({ loggedInUser: res.data })
  }

  async signup() {
    console.log('fired')
    let {username, hash_value} = this.state;
    let res = await axios.post('/auth/signup', {username: username, hash_value: hash_value})
    this.setState({ loggedInUser: res.data })
  }

  async logout() {
    await axios.get('/auth/logout')
  }

  render() {
    return (
      <div className="App">
        <p>Username: <input onChange={(e) => this.setState({username: e.target.value})} type='text' /></p>
        <p>hash_value: <input onChange={(e) => this.setState({hash_value: e.target.value})} type='text' /></p>
        <button onClick={() => this.login()}>Login </button>
        <button onClick={() => this.signup()}>Sign Up</button>
      </div>
    );
  }
}

export default App;