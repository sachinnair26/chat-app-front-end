import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import RequestOtp from '../RequestOtp';
import Home from '../Home';

export default function Routes(){
    return (
        <Router>
            <Switch>
                <Route path='/sendotp' component={RequestOtp}/>
                <Route path='/' component={Home}/>
                {/* <Route path='/verifyotp' component={}/> */}
                {/* <Route path='/home' component={}/> */}
            </Switch>
        </Router>
    )
}