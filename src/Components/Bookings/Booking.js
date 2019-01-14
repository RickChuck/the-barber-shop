import React, {Component} from 'react';
import axios from "axios";
import {
    updateUserName,
    updateType,
    updateProvider,
    updateDate,
    updateTime,
    resetValues
} from '../../dux/reducer';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';

class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            client_name: '',
            service_type:'',
            service_provider: '',
            app_date: '',
            app_time: '',
            
        }
    }
    handlePropType = async (e) => {
        await this.props.updateType(e.target.value)
    }
    
    handlePropsUserName = async (e) => {
        await this.props.updateUserName(e.target.value)
    }

    handlePropProvider = (e) => {
        this.props.updateProvider(e.target.value)
    }

    handlePropDate = (e) => {
        this.props.updateDate(e.target.value)
    }

    handlePropTime = (e) => {
        this.props.updateTime(e.target.value)
    }


    handleCancel = () => {
        this.props.resetValues()
    }

    createBooking = () => {
        axios.post('/api/bookings', {
            client_name: this.props.userName,
            service_type: this.props.type,
            service_provider: this.props.provider,
            app_date: this.props.app_date,
            app_time: this.props.app_time
        }).then(res => {
            this.props.resetValues()
            this.props.history.push('./dashboard')
        })
    }

    render(){
        // console.log(this.state)
        return(
            <div>
                <h3>Fill out the information below to book your next appointment</h3>
                <hr/>
                <h4>Enter your first and last name:
                    <input onChange={this.handlePropsUserName} value={this.props.client_name} type='text'/>
                </h4>
                <div className='booking_service_type'>
                    <h4>Select service: <select onChange={this.handlePropType} value={this.props.service_type}>
                        <option value='The Apprentice'>The Apprentice $18</option>
                        <option value='The GM'>The GM $25</option>
                        <option value='The Executive'>The Executive $35</option>
                        <option value='The Chairman'>The Chairman $55</option>
                        <option value='The G.O.A.T'>The G.O.A.T $95</option>
                    </select>
                    </h4>
                </div>
                <div className='booking_service_provider'>
                    <h4>Select Barber: <select onChange={this.handlePropProvider} value={this.props.service_provider}>
                        <option value='Kaylea'>Kaylea</option>
                        <option value='John Doe'>John Doe</option>
                    </select>
                    </h4>
                </div>
                <div className='booking_date'>
                    <p>Date: <input type='date' onChange={this.handlePropDate} value={this.props.app_date}></input>
                    </p>
                </div>
                <div className='booking_time'>
                    <p>Time: <select onChange={this.handlePropTime} value={this.props.app_time}>
                        <option value='09:00:00'>9am</option>
                        <option value='09:30:00'>9:30am</option>
                        <option value='10:30:00'>10am</option>
                        <option value='10:30'>10:30am</option>
                        <option value='11'>11am</option>
                        <option value='11:30'>11:30am</option>
                        <option value='12'>12pm</option>
                        <option value='12:30'>12:30pm</option>
                        <option value='1'>1pm</option>
                        <option value='1:30'>1:30pm</option>
                        <option value='2'>2pm</option>
                        <option value='2:30'>2:30pm</option>
                        <option value='3'>3pm</option>
                        <option value='3:30'>3:30pm</option>
                        <option value='4'>4pm</option>
                        <option value='4:30'>4:30pm</option>
                        <option value='5'>5pm</option>
                        <option value='5:30'>5:30pm</option>
                        <option value='6'>6pm</option>
                        <option value='6:30'>6:30pm</option>
                    </select>
                    </p>
                </div>
                <button onClick={this.createBooking}>Submit</button>
            </div>
        )
    }
}

function mapStateToProps(reduxState){
    console.log(reduxState)
    return {
        userName: reduxState.client_name,
        type: reduxState.service_type,
        provider: reduxState.service_provider,
        app_date: reduxState.app_date,
        app_time: reduxState.app_time,
    }
}

export default withRouter (connect(mapStateToProps, {
    updateUserName,
    updateType,
    updateProvider,
    updateDate,
    updateTime,
    resetValues
})(Dashboard));
