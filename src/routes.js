import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from './Home'
import Bearings from './Bearings'

function Routes() {


    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/bearings" component={Bearings} />
            </Switch>
        </Router>

    )
}

export default Routes