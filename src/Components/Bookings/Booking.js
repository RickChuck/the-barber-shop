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
import {withRouter} from 'react-router';
// import { Collapse, Button, CardBody, Card } from 'reactstrap';


class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            client_name: '',
            service_type:'',
            service_provider: '',
            app_date: '',
            app_time: '',
            collapse: false
        };
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
    // toggle = () => {
    //     this.setState({ collapse: !this.state.collapse });
    // }

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
                        <option value='John Doe'>John Doe</option>
                        <option value='Jane Doe'>Jane Doe</option>
                        <option value='Kaylea'>Kaylea</option>
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
                        <option value='10:00:00'>10am</option>
                        <option value='10:30:00'>10:30am</option>
                        <option value='11:00:00'>11am</option>
                        <option value='11:30:00'>11:30am</option>
                        <option value='12:00:00'>12pm</option>
                        <option value='12:30:00'>12:30pm</option>
                        <option value='01:00:00'>1pm</option>
                        <option value='01:30:00'>1:30pm</option>
                        <option value='02:00:00'>2pm</option>
                        <option value='02:30:00'>2:30pm</option>
                        <option value='03:00:00'>3pm</option>
                        <option value='03:30:00'>3:30pm</option>
                        <option value='04:00:00'>4pm</option>
                        <option value='04:30:00'>4:30pm</option>
                        <option value='05:00:00'>5pm</option>
                        <option value='05:30:00'>5:30pm</option>
                        <option value='06:00:00'>6pm</option>
                        <option value='06:30:00'>6:30pm</option>
                    </select>
                    </p>
                </div>
                <button className='hover' onClick={this.createBooking}>Submit</button>
                <hr/>
                    {/* <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
                    <Collapse isOpen={this.state.collapse}>
                        <Card>
                            <CardBody>
                                <div>
                                <h4>The G.O.A.T</h4>
                                <p>Everything: Haircut, shampoo & conditioner, double steam towel, scalp massage, chair massage, neck shave, wax nose/ears/brows, straight razor shave or beard trim. Includes "Face Buff" treatment.</p>
                                </div>
                                <div>
                                <h4>The Chariman</h4>
                                <p>Haircut, shampoo & conditioner, double steam towel, scalp massage, chair massage, beard trim, neck shave, wax nose/ears/brows.</p>
                                </div>
                                <div>
                                <h4>The Executive</h4>
                                <p>Haircut, shampoo & conditioner, double steam towel, scalp massage, chair massage, neck shave</p>
                                </div>
                                <div>
                                <h4>The GM</h4>
                                <p>Standard haircut & shampoo</p>
                                </div>
                                <div>
                                <h4>The Apprentice</h4>
                                <p>Cut + shampoo, for kids 12 and under 
                                    *Add a steam towel for $2 more</p>
                                </div>
                            </CardBody>
                        </Card>
                    </Collapse> */}
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
