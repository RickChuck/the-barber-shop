import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Dashboard from './Components/Dashboard/Dashboard';
import Products from './Components/Products/Products';
import Cart from './Components/Cart/Cart';
import Booking from './Components/Bookings/Booking';

export default (
    <Switch>
        <Route exact path='/' component={Auth}/>
        <Route exact path='/dashboard' component={Dashboard}/>
        <Route exact path='/products' component={Products}/>
        <Route exact path='/cart' component={Cart}/>
        <Route exact path='/booking' component={Booking}/>
    </Switch>
)