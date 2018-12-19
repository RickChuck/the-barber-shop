import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Dashboard from './Components/Dashboard/Dashboard';
import Products from './Components/Products/Products';
import Cart from './Components/Cart/Cart';

export default (
    <Switch>
        <Route exact path='/' component={Auth}/>
        <Route exact path='/dashboard' component={Dashboard}/>
        <Route exact path='/products' component={Products}/>
        <Route exact path='/cart' component={Cart}/>
        {/* <Route exact path='/booking1' component={Booking1}/>
        <Route exact path='/booking2' component={Booking2}/>
        <Route exact path='/booking3' component={Booking3}/> */}
    </Switch>
)