import React, { Component } from 'react';
import {BrowserRouter,Link} from 'react-router-dom'
import RouterView from './routerView';
import Router from './config'
import '../css/style.css'
class RouterConfig extends Component {
    
    render() {
        return (
            <BrowserRouter>
                <RouterView routes={Router.routers}/>
            </BrowserRouter>
        );
    }
}

export default RouterConfig;
import React, { Component } from 'react';
import {Redirect,Switch,Route} from 'react-router-dom'
class RouterView extends Component {
    
    render() {
        let {
            routes
        }=this.props;
        let isRedirect=routes&&routes.length>0&&routes.filter(v=>v.redirect);

        let RedirectComponent=isRedirect&&isRedirect.length>0&&isRedirect.map((v,i)=>{
            return <Redirect key={i} from={v.path} to={v.redirect}/>
        })
        return (
            <Switch>
                {
                    routes&&routes.length>0&&routes.map((v,i)=>{
                        if(v.component){
                            return <Route 
                            key={i} 
                            path={v.path}
                            component={(routeApi)=>{
                                return <v.component routes={v.children} {...routeApi}/>
                            }}/>
                        }
                        
                    }).concat(RedirectComponent)
                }
            </Switch>
        );
    }
}

export default RouterView;
export const getData=(data)=>{
    return {
        type:'ALL_DATA',
        data:data
    }
}
const initStore={
    listData:[],
}
const ListStore=(state=initStore,action)=>{
    // console.log(action.data,'ssss')
    switch(action.type){
        case 'ALL_DATA':
        return{
            ...state,
            listData:[...action.data]
         };
         default:
         return state;
    }
}
export default ListStore

import Order from  './order/order.reducer'
import {createStore,combineReducers} from 'redux'
let bigStore=combineReducers({Order})
export default createStore(bigStore)


import {connect} from 'react-redux'
import * as OrederAction from "../store/order/order.action"
import {bindActionCreators} from 'redux'    //绑定好多个方法合并
const mapStoreToProps=state=>state.Order
const mapDispatchProps=dispatch=>bindActionCreators(OrederAction,dispatch)
export default connect(mapStoreToProps,mapDispatchProps)(Order);

