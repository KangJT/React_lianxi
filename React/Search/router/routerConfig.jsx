import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import Main from '../page/main'
import Edit from '../page/edit'
import Input from '../page/input'
class RouterConfig extends Component {
    render() {
        return (
           
                <Router>
                    <Switch>
                    <Route path='/' render={()=><Redirect to='/main'/>} exact/>
                    <Route path='/Main' component={Main}/>
                    <Route path='/Edit' component={Edit}/>
                    <Route path='/Input' component={Input}/>
                    </Switch>
                </Router>
            
        );
    }
}

export default RouterConfig;