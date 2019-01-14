import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Header/Header';
import axios from 'axios';
import '../Style/Dashboard.scss';
// import Booking from '../Bookings/Booking';

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
                        <button onClick={() => {this.delete(el.app_id)}}>Delete Appointment</button>
                        <p className='cardTitle'>Hello {el.client_name}, your next appointment is with {el.service_provider}.</p>
                        <p>Date: {new Intl.DateTimeFormat('en-US').format(date)} || Time: {el.app_time}</p>
                        <p>The service that was requested was, {el.service_type}.
                            Thank you for booking with us!</p>
                    </div>   
                )
        })
        return(
            <div>
                <div className='header'>
                    <Header/>
                </div>
                <div className='body'>
                    <h1>Welcome</h1>
                    <p>Let our team of expert stylists help you look you best!</p>
                    <div className='bookApp'>
                        <Link to={'/booking'}><button>Book Now!</button></Link>
                    </div>
                    <div>
                        <h1>Your Appointments</h1>
                        {bookingsDisplay}
                    </div>
                </div>
            </div>
        )
    }
}
export default Dashboard