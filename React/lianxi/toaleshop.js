import React, { Component } from 'react';

import {withRouter} from 'react-router-dom'
class Shoplist extends Component {
    
    render() {
       let {
        shopdata,changeCount,type
       }=this.props
       console.log('sss',this.props)
        return (
            <div>
                {
                    <ul className={'listdata'}>
                        {
                            shopdata.length>0&&shopdata.map((v,i)=><li key={i}>
                               
                                <div onClick={()=>{
                                this.props.history.push(`/detail/${v.id}`)
                              }}>
                                   <p>名字：{v.name}</p>
                                   <p>单价：{v.peice}</p>
                               </div>
                               <div>
                                    {
                                   v.num>0?<div>
                                                <button onClick={()=>changeCount(v.id,'del',type)}>-</button>
                                                <span>{v.num}</span>
                                                <button onClick={()=>changeCount(v.id,'add',type)}>+</button>
                                          </div>:<div onClick={()=>changeCount(v.id,'add',type)}>加入购物</div>
                               }
                               </div>
                              
                               
                            </li>)
                        }
                    </ul>
                }
            </div>
        );
    }
}

export default withRouter(Shoplist);

Mock.mock('/drink',()=>{
    return {
        code:0,
        data:drink
    }
})
Mock.mock('/noodles',()=>{
    return {
        code:1,
        data:noodles
    }
})
let bigData=drink.concat(noodles);

Mock.mock('/detaillist',({body})=>{
   let newId=JSON.parse(body).id;
    return {
        code:1,
        data:bigData.filter(v=>v.id===newId)[0]
    }
})
Mock.mock('/login',(options)=>{
    console.log(options)
    let newObj=JSON.parse(options.body);
    let newPawd=newObj.pawd;
    let newUser=newObj.username;
    console.log(newPawd,newUser)
    return {
        code:1,
        data:data.filter(v=>{
             return v.name===newUser&&v.pwd===newPawd
            
        })
    }
})

Mock.mock("/login",(options)=>{
    console.log('options',options);
    let newBody = JSON.parse(options.body);
    let res = data.filter((v,i) => {
        return v.username === newBody.username && v.pwd === newBody.pwd
    })
    return {
        code:1,
        data:res.length !== 0
    }
 })

 import Home from '../views/shop/index'
import Detail from '../views/detail';
import Login from '../views/login';
import Car from '../views/shop/car';
import Mean from '../views/shop/mean';


import Noodles from '../views/shop/listchild/noodles';
import Drink from '../views/shop/listchild/drink';
import List from '../views/shop/list';

let routers=[
    {
        path:"/home",
        component:Home,
        children:[
            {
                path:'/home/list',
                component:List,
                children:[
                    {
                         path:'/home/list/drink',
                         component:Drink
                    },{
                        path:'/home/list/noodles',
                        component:Noodles
                    },
                    {
                        path:'/home/list',
                        redirect:'/home/list/drink'
                    }
                ]
            },{
                path:"/home",
                redirect:'/home/list',
            },
            {
                path:"/home/car",
                component:Car,
            },
            {
                path:"/home/mean",
                component:Mean,
            }
        ]
    },
    {
        path:"/detail/:id",
        component:Detail
    },{
        path:"/login",
        component:Login
    }
    ,{
        path:"/",
        redirect:'/home'
    }
]

export default routers;

import React, { Component } from 'react';
import {BrowserRouter,Link} from 'react-router-dom'
import Route from './config'
import Routerview from './routerView'

import '../css/style.css'
class RouterConfig extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routerview route={Route}/>
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
            route
        }=this.props;
        let isRoute=route && route.length > 0 && route.filter(v=>v.redirect);
        let isRedirect=isRoute&&isRoute.length>0&&isRoute.map((v,i)=>{
            return <Redirect from={v.path} to={v.redirect} key={i}/>
        })
        
        return (
            <Switch>
                {
                   route&&route.length>0&&route.map((v,i)=>{
                    
                       if(v.component){
                           return <Route key={i} path={v.path} component={(ApiID)=>{
                              return <v.component route={v.children} {...ApiID}/>
                          }}/>
                       }
                       
                   }).concat(isRedirect)
                }
            </Switch>
        );
    }
}

export default RouterView;


import axios from 'axios'
import '../../mock/data'
export const getDrinkData=()=>{
    return dispatch=>{
        console.log(9)
      axios.get('/drink').then(res=>{
          dispatch({
              type:"DRINK_DATA",
              data:res.data.data
          })
      })
    }
}
export const getNoodlesData=()=>{
    return dispatch=>{
      axios.get('/noodles').then(res=>{
          dispatch({
              type:"NOODLES_DATA",
              data:res.data.data
          })
      })
    }
}
export const changeCount=(ind,type,bigType)=>{

       return (dispatch,getState)=>{
         let data = getState().ListStore[bigType]
         let {allCount,allPrice}=getState().ListStore
        
         data.forEach((v,i)=> {
            if(v.id===ind){
                if(type==='add'){
                v.num++;
                allCount++;
                allPrice+=v.peice
    
            }else{
                v.num--;
                allCount--;
                allPrice-=v.peice
            }
         }
             
         });
         dispatch({
             type:bigType==='drinkData' ?'DRINK_DATA':"NOODLES_DATA",
             data:data
         })
         dispatch({
            type:'ALLCOUNT_DATA',
            data:allCount
        })
        dispatch({
            type:'ALLPRICE_DATA',
            data:allPrice
        })
       }
}


let initStore={
    drinkData:[],
    noodlesData:[],
    allCount:0,
    allPrice:0
}
const ListStore=(state=initStore,action)=>{
  switch(action.type){
      case 'DRINK_DATA':
      return {
          ...state,
          drinkData:[...action.data]
      }
      case 'NOODLES_DATA':
      return {
          ...state,
          noodlesData:[...action.data]
      }
      case 'ALLCOUNT_DATA':
      return {
          ...state,
          allCount:action.data
      }
    
      case 'ALLPRICE_DATA':
       return {
           ...state,
           allPrice:action.data
       }

       default:{
          return state
      }
  }
}
export default ListStore

import {createStore,combineReducers,applyMiddleware} from 'redux'
import ListStore from './list/list.order'
import thunk from 'redux-thunk'

let bigStore=combineReducers({ListStore});

export default createStore(bigStore,applyMiddleware(thunk))

import React, { Component } from 'react';
//连接数据库
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as ListActions from '../../../store/list/list.action'
import Shoplist from '../../../component/shopList'

class Drink extends Component {
    componentDidMount(){ 
        let {getDrinkData, drinkData} = this.props;
        drinkData.length === 0 && getDrinkData()
    }
    render() {
        let {
            drinkData,
            changeCount
        } = this.props
        console.log(this.props)
        return (
            <main>
                <Shoplist shopdata={drinkData}  changeCount={changeCount} type='drinkData'/>
            </main>
        );
    }
}
let mapStoreToProps=(state)=>state.ListStore
let mapDispatchToProps=(dispatch)=>bindActionCreators(ListActions,dispatch)
export default connect(mapStoreToProps,mapDispatchToProps)(Drink);

import React, { Component } from 'react';
//连接数据库
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

import * as ListActions from '../../../store/list/list.action'

import Shoplist from '../../../component/shopList'
class Noodles extends Component {
    componentDidMount(){ 
        const {getNoodlesData,noodlesData,} = this.props;
        noodlesData.length === 0 &&getNoodlesData()
    }
    
    render() {
        let {
            noodlesData,
            changeCount
        }=this.props;
       
        return (
            <main>
               <Shoplist shopdata={noodlesData}  changeCount={changeCount} type='noodlesData'/>
            </main>
        );
    }
}
let mapStoreToProps=(state)=>state.ListStore
let mapDispatchToProps=(dispatch)=>bindActionCreators(ListActions,dispatch)
export default connect(mapStoreToProps,mapDispatchToProps)(Noodles);


import React, { Component } from 'react';

//连接数据库
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

import * as ListActions from '../../store/list/list.action'

import Shoplist from '../../component/shopList'
class Car extends Component {
    render() {
        let {
            noodlesData, drinkData,
            changeCount,allPrice
        }=this.props;
       
        return (
            <div className={'list'}>
                <header>
                    <h2>购物车</h2>
                </header>
                <main>
                   <Shoplist shopdata={drinkData.filter(v=>v.num>0)}  changeCount={changeCount} type='drinkData'/>
                   <Shoplist shopdata={noodlesData.filter(v=>v.num>0)}  changeCount={changeCount} type='noodlesData'/>
                </main>
                <p>总价：{allPrice}</p>
            </div>
               
        );
    }
}


let mapStoreToProps=(state)=>state.ListStore
let mapDispatchToProps=(dispatch)=>bindActionCreators(ListActions,dispatch)
export default connect(mapStoreToProps,mapDispatchToProps)(Car);

import React, { Component } from 'react';
import Routerview from '../../router/routerView'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
class Index extends Component {
    render() {
        let {
            route,allCounts
        }=this.props
        return (
            <div className={'box'}>
                
                <Routerview route={route}/>
                <footer style={{
                    height:'50px',
                    lineHeight:'50px'
                }}>
                    <Link to='/home/list'>列表</Link>
                    <Link to='/home/car'>购物车</Link>
                    <Link to={window.localStorage.getItem('isLogin')?'/home/mean':"/login"}>我的</Link>
                     <span className={'classsToal'}>{allCounts}</span>
                </footer>
            </div>
        );
    }
}

export default connect(
    (state)=>{
        return {allCounts:state.ListStore.allCount}
    }
)(Index);


import React, { Component } from 'react';
import Routerview from '../../router/routerView'
import { NavLink} from 'react-router-dom'

class List extends Component {
    render() {
        let {
            route
        }=this.props
        
        return (
            <div className={'list'}>
                <header>
                   <NavLink activeClassName="active" to='/home/list/drink' >饮料</NavLink>
                   <NavLink activeClassName="active" to='/home/list/noodles'>面条</NavLink>
                </header>
                <Routerview route={route}/>
            </div>
        );
    }
}

export default List;


import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import '../mock/data'
class Detail extends Component {
    constructor(props){
        super(props);
        this.state={
            detailData:[]
        }
    }
    componentDidMount(){
        
        axios.get('/detaillist',{
          data:{
            id:this.props.match.params.id
          }
        }).then(res=>{
            console.log(res.data.data)
            this.setState({
                detailData:res.data.data
            })
        })
    }
    render() {
        let {
            detailData
        }=this.state
        let {
            allCounts
        }=this.props
        return (
            <div>
               
                   <p>名字：{detailData.name}</p>
                   <p>￥{detailData.peice}</p>
                   <p>数量：{allCounts}</p>
               
            </div>
        );
    }
}

export default connect(
    (state)=>{
        return {allCounts:state.ListStore.allCount}
    }
)(Detail);

import React, { Component } from 'react';
import axios from 'axios';
import '../mock/data'
class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            pawd:''
        }
    }
    changeVal=(e,type)=>{
       
        if(type==='name'){
            this.setState({
                username:e.target.value
            })
        }else{
            this.setState({
                pawd:e.target.value
            })
        }
    }
    logining=()=>{
        console.log(this.props,'sssss')
        axios.post('/login',{
            ...this.state
        }).then(res=>{
            if(res.data.data){
                window.localStorage.setItem("isLogin",true)
                this.props.history.push("/index")
            } else {
                alert("用户名密码错误")
            }
        })
    }
    render() {
        let {
            username,pawd
        }=this.setState
        return (
            <div>
                D登陆页面
                <div>
                    用户名<input value={username} onChange={(e)=>{
                        this.changeVal(e,'name')
                    }}></input>
                </div>
                <div>
                    密码<input value={pawd} onChange={(e)=>{
                        this.changeVal(e,'pwd')
                    }}></input>
                </div>
                <div>
                    <button onClick={()=>this.logining()}>登录</button>
                </div>
            </div>
        );
    }
}

export default Login;