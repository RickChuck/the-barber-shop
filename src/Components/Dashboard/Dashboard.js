import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Header/Header';
import axios from 'axios';
import '../Style/Dashboard.scss';

class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            bookings: []
        }
    }
    
    componentDidMount(){
        axios.get('/api/getBookings')
        .then(res => {
            this.setState({
                bookings: res.data
            })
        })
    }

    delete = (id) => {
        axios.delete(`/api/bookings/${id}`)
        .then(res => {
            this.setState({
                bookings: res.data
            })
        })
    }
  
    render(){
        let bookingsDisplay = this.state.bookings.map((el, i) => {
            let date = new Date(el.app_date)
                return(
                    <div key={i} className='bookingCard'>
                        <h3>Your Appointment</h3>
                        <button className='dash-delete' onClick={() => {this.delete(el.app_id)}}>Delete Appointment</button>
                        <p className='cardTitle'>Hello {el.client_name}, your next appointment is with {el.service_provider}.</p>
                        <p>Date: {new Intl.DateTimeFormat('en-US').format(date)} || Time: {el.app_time}</p>
                        <p>The service that was requested was, {el.service_type}.
                            Thank you for booking with us!</p>
                    </div>   
                )
        })
        return(
            <div>
                <div className='dash-header'>
                    <Header/>
                </div>
                <div className='body'>
                    <h1 className='dash-title'>Welcome</h1>
                    <p>Let our team of expert stylists help you look your best!</p>
                    <div className='bookApp'>
                        <Link to={'/booking'}><button>Book Now</button></Link>
                    </div>
                    <div className='dash-app'>
                        {bookingsDisplay}
                    </div>
                </div>
            </div>
        )
    }
}
export default Dashboard