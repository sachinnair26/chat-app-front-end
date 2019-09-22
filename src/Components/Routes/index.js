import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import RequestOtp from '../RequestOtp';
import Home from '../Home';

export default function Routes(){
    return (
        <Router>
            <Switch>
                <Route path='/home' exact component={Home}/>
                <Route path='/'  component={RequestOtp}/>
            </Switch>
        </Router>
    )
}