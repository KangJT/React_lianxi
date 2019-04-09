Mock.mock('/detail',()=>{
    return {
        code:1,
        
    }
})

import Detail from '../views/detail'
import Index from '../views/index'
export default {
    routers:[
        {
            path:'/',
            redirect:'index'
        },{
            path:'/detail',
            component:Detail
        },{
            path:'/index',
            component:Index
        }
    ]
}

import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import Route from './config'


import Routerview from  '../router/routerview'

class RouterConfig extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routerview routes={Route.routers}/>
            </BrowserRouter>
        );
    }
}

export default RouterConfig;

import React, { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'
class Routerview extends Component {

    render() {
        let {routes}=this.props;
        let isRedirect = routes && routes.length>0 && routes.filter(v=>v.redirect);
        let redirectRoute=isRedirect&& isRedirect.length>0&&isRedirect.map((v,i)=>{
             return <Redirect path={v.path} to={v.redirect} key={i}/>
        })
     
        return (
            <Switch>
                {
                    routes.map((v,i) =>{
                        if(v.component){
                            return <Route path={v.path} component={(routerAPI)=>{
                                return <v.component {...routerAPI} routes={v.children}/>
                            }} key={i}/>
                        }
                    }).concat(redirectRoute)
                }
            </Switch>
        );
    }
}

export default Routerview;



import {createStore} from 'redux'
let initQuestionData={
     data:[],
     num:0
}
function  initQuestion(state=initQuestionData,action){
    switch(action.type){
        case "QUESTION_DATA":
        return {
            ...state,
            data:action.data,
        };
        default:{
            return state
        }
    }
}

let Store=createStore(initQuestion)

export default Store

import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../css/style.css'
class Index extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>下面带点击消息是跳转详情介绍</h1>
                <Link to='/detail'>消息</Link>
            </div>
            
        );
    }
}

export default Index;

import React, { Component } from 'react';
import Store from '../store/srote'
console.log(Store);
class APP extends Component {
    constructor(props){
        super(props);
        this.state={
           inputVal:''
        }
    }
    addMessage=()=>{
        let {
            inputVal
        }=this.state;
        let {
            data
        }=Store.getState();
        let obj={
            num:12,
            isNum:false,
            isCare:true,
            name:inputVal,
            button:'0',
            title:'0',
            id:'0',
            contxt:'0'
        };
        data.push(obj);
        Store.dispatch({
            type:'QUESTION_DATA',
            data:data,
        })
    }
    onChangeValue=(e)=>{
        this.setState({
            inputVal:e.target.value
        })
    }
    render() {
        let {
            data
        }=Store.getState();
        let {
            inputVal
        }=this.state
        return (
            <div>
                <input value={inputVal} placeholder='请输入你的内容' onChange={(e)=>{
                    this.onChangeValue(e)
                }}/>
                <button onClick={()=>{
                   this.addMessage();
                }}>发送</button> 
                <span>总数据{data.length}</span>                
            </div>
        );
    }
}

export default APP;

import React, { Component } from 'react';
import '../mock/data'
import axios from 'axios'
import Store from '../store/srote'
import APP from './app'
console.log(Store,Store.getState())
class Detail extends Component {
    constructor(props){
        super(props);
        Store.subscribe(()=>{
            this.forceUpdate()

        })
    }
    componentDidMount(){
        axios.get('/detail').then(res=>{
            Store.dispatch({
                type:'QUESTION_DATA',
                data:res.data.data,
            })
        })
    }
    //改变关注
     changeCare=(ind)=>{
        let {
            data
        }=Store.getState();
        data[ind].isCare=!data[ind].isCare
        Store.dispatch({
            type:'QUESTION_DATA',
            data:data,
        })
     }
     //删除
     dataDel=(ind)=>{
        let {
            data
        }=Store.getState();
        data.splice(ind,1);
        Store.dispatch({
            type:'QUESTION_DATA',
            data:data,
       })
     }
     //点赞
     changeNum=(ind)=>{
        let {
            data
        }=Store.getState();
        Store.dispatch({
            type:'QUESTION_DATA',
            data:data,
       });
       if(data[ind].isNum){
         data[ind].num++;
         data[ind].isNum=false
       }else{
            data[ind].isNum=true
            data[ind].num--;
       }
     }
    render() {
        let {
            data
        }=Store.getState()
        return (
            <div className={'conentBox'}>
                <header>
                    <span>&lt;</span>
                    <p>消息回复</p>
                </header>
                <main>
                   {
                      data&&data.length>0&& data.map((v,i)=>{
                           return  <dl key={i}>
                                        <dt>
                                            <img src={v.pic}alt=""/>
                                        </dt>
                                        <dd>
                                            <div className={'div1'}>
                                                <p>{v.name}<span>{v.title}</span></p>
                                                <span 
                                                onClick={()=>{
                                                   this.changeCare(i)
                                                }}
                                                >{v.isCare?"+关注":'已将关注'}
                                                </span>
                                            </div>
                                            <div>
                                                <p> {v.contxt} </p>
                                                <span 
                                                onClick={()=>{
                                                    this.changeNum(i)
                                                }}>点赞 {v.num}</span> 
                                                <button onClick={()=>{
                                                    this.dataDel(i)
                                                }}>删除</button>
                                            </div>
                                        </dd>
                                   </dl>
                       })
                   }
                </main>
                <footer>
                    <APP/>
                </footer>
            </div>
        );
    }
}

export default Detail;


