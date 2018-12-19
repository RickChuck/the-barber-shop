import React, {Component} from 'react';
import Header from '../Header/Header';


class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            bookings: []
        }
    }


    render(){
        return(
            <div>
                <div className='header'>
                    <Header/>
                </div>
                <div className='body'>
                    <h1>Dashboard</h1>
                    This is the body
                </div>
            </div>
        )
    }
}
export default Dashboard