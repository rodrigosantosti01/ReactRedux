import React from 'react'
import {hashHistory,BrowserRouter,Router,Route,Redirect,Switch} from 'react-router-dom'

import About from './about/about'
import Todo from './todo/todo'



export default props => (
    <BrowserRouter history={hashHistory}>
        <Switch>
            <Route exact path="/todo" component={Todo}/>
            <Route exact path="/about" component={About}/>
            <Redirect from="*" to="/todo"/>       
        </Switch>
    </BrowserRouter>
)