import React, { Component } from 'react';
import {  Redirect, Route, BrowserRouter as Router } from 'react-router-dom'
import Main from '../page/main'
import Detail from '../page/detail'
import Edit from '../page/edit'
import '../../fonts/iconfont.css'
class Routerconfig extends Component {
    render() {
        return <Router>
                    <React.Fragment>
                        <Route path='/' render={() => <Redirect from='/' to='/main' />} exact />
                        <Route path='/main' component={Main}></Route>
                        <Route path='/detail' component={Detail}></Route>
                        <Route path='/edit' component={Edit}></Route>
                    </React.Fragment> 
           </Router>
    }
}

export default Routerconfig;