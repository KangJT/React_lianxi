Mock.mock('/data',()=>{
    return {
        code:1,
        data:[
            {
                id:0,
                name:"阿里巴巴",
                zx:'79.860',
                zf:'1.87',
                zd:'1.470',
                num:885611,
                ischeck:false,
                tj:'添加'

            }]
        }
})

import React, { Component } from 'react';
import { connect } from 'react-redux'
class Edit extends Component {
    state={
        con:null,
        ind:0
    }
    render() {
        let { arr } = this.props
        let {ind}=this.state
        return (
            <React.Fragment>
                <div className='head'>
                    <i className='iconfont icon-xiangzuo' onClick={()=>{
                        this.props.history.push('/main/zs')
                    }}></i>
                    <h6>自选设置</h6>
                    <h6 onClick={()=>{
                        this.props.history.push('/Input')
                    }}>添加设置</h6>
                </div>
                <div className="section">
                    <ul className="section-ul">
                        {
                            arr.map((item, index) => {
                                return <div key={index} className='edit'>
                                <input type="checkbox" className='in' 
                                    onClick={()=>{
                                        this.btn(index)
                                    }}
                                     checked={item.ischeck}
                                     onChange={(e)=>{
                                        arr[index].ischeck=e.target.checked
                                     }}
                                     />
                                    <li key={index}>
                                        <div className="title">
                                            <h3>{item.name}</h3>
                                            <p>{item.num}</p>
                                        </div>
                                        <span className='zi1'>{item.zx}</span>
                                        <span className='zi1'>-{item.zf}%</span>
                                        <span className='zi1'>{item.zd}</span>
                                    </li>
                                </div>
                            })
                        }
                    </ul>
                </div>
                <div className="foot" style={{background:ind?'red':''}}>
                        <h3 onClick={()=>{
                            this.del()
                        }}>删除(0)</h3>
                </div>
            </React.Fragment>
        );
    }
    btn=(i)=>{
        this.setState({ind:i})
    }
    del=()=>{
        let {arr,update} =this.props
        arr.map((v,i)=>{
            if(v.ischeck){
              return arr.splice(i,1)
            }  
        })
        update(arr)
    }
}
let mapStateToPorps = state => {
    return state.LIST
}
let mapDispatchProps = (dispatch) => {
    return {
        update(payload){
             dispatch({type:'UPDATE',payload})
         }
    }
}
export default connect(mapStateToPorps, mapDispatchProps)(Edit);

import React, { Component } from 'react';
import axios from 'axios'
import '../mock/mock.js'
import {connect} from 'react-redux'

class Input extends Component {
    state={
        data:[],
        isTrue:true
    }
    render() {
        let {list}=this.props
        let {tit,isTrue}=this.state
        return (
            <div className='box'>
                <div className="head">
                    <i className='iconfont icon-xiangzuo' onClick={()=>{
                       this.props.history.push('/main/zs')
                    }}></i>
                    <h6>股票添加</h6>
                    <span></span>
                </div>
                <div className="input">
                    <input type="text" onKeyDown={(ev)=>{
                        if(ev.keyCode==13){
                            this.refs.val.value=''
                        }
                    }} ref='val' onInput={()=>{
                        this.onInput()
                    }}/>
                </div>
                <div className="section">
                    <ul className='sec-ul' style={{display:isTrue?'block':'none'}}>
                        {
                            list&&list.map((item,index)=>{
                                return <li key={index}>
                                    <span>{item.name}</span>
                                    <span>{item.num}</span>
                                    <span  ref='change' onClick={(ev)=>{
                                        this.add(item,index)
                                    }}>{item.tj}</span>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
    componentDidMount(){
        axios('/data').then(res=>{
            this.setState({data:res.data.data})
        })
    }
    onInput=()=>{
        let {push}=this.props
        let val=this.refs.val.value
        let {data}=this.state
        if(val){
            let newData=data.filter((v,i)=>{
                return v.name.match(val)
           })
           push(newData)
        }
        console.log(this.props.list.length)
        if(this.props.list.length>1){
            this.state.isTrue=false
            this.setState({})
        }
    }
    add=(item,index)=>{
       let {update,arr}=this.props
        arr.map((v,i)=>{
            v.tj='已添加'
        })
       update(item,arr)
    }
}
let mapStateToPorps=state=>{
    return state.LIST
}
let mapDispatchProps=(dispatch)=>{
    return {
        push(payload){
            dispatch({type:'PUSH',payload})
        },
        update(item,arr){
           let newArr=arr.filter((v,i)=>{
                return v.id===item.id
            })
            if(newArr.length<1){
                arr.push(item)
            }
            dispatch({type:'UPDATE',payload:arr})
        }
    }
}
export default connect(mapStateToPorps,mapDispatchProps)(Input);


import React, { Component } from 'react';
import {connect} from 'react-redux'
class ZS extends Component {
    state={
        isTrue:true
    }
    render() {
        let {isTrue}=this.state
        let {arr}=this.props
        console.log(arr)
        return (
            <React.Fragment>
            
                <ol className="ol">
                    <li onClick={()=>{
                        this.edit()
                    }}>编辑<i className='iconfont icon-bianji'></i></li>
                </ol>
                <div className="section">
                        <div className="add" style={{display:isTrue?'block':'none'}}>
                            <div className="add-inner">
                                <i onClick={()=>{
                                    this.btn()
                                }} className='iconfont icon-jia'></i>
                            </div>
                            <p>暂无股票,点击添加</p>
                        </div>
                       <ul className="section-ul">
                            {
                                arr.map((item,index)=>{
                                    return <li key={index}>
                                        <div className="title">
                                            <h3>{item.name}</h3>
                                            <p>{item.num}</p>
                                        </div>
                                        <span>{item.zx}</span>
                                        <span>-{item.zf}%</span>
                                        <span>{item.zd}</span>
                                    </li>
                                })
                            }
                       </ul>
                </div>
            </React.Fragment>
        );
    }
    btn=()=>{
        this.state.isTrue=false
        this.setState({})
        this.props.history.push('/Input')
    }
    componentDidMount(){
        let {arr}=this.props
        if(arr.length>0){
            this.state.isTrue=false
            this.setState({})
        }
    }
    edit=()=>{
        this.props.history.push('/Edit')
    }
}

let mapStateToPorps=state=>{
    return state.LIST
}
let mapDispatchProps=(dispatch)=>{
    return {}
}
export default connect(mapStateToPorps,mapDispatchProps)(ZS);

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

import {createStore,combineReducers} from 'redux'
import LIST from './list'
const reducer=combineReducers({
    LIST
})
const Store=createStore(reducer)
export default Store

let defaltState={
    list:[],
    arr:[]
}
let LIST=(state=defaltState,action)=>{
    const {type,payload}=action
    switch(type){
        case 'PUSH':
        return {...state,list:[...payload]}
        case 'UPDATE':
        // console.log(payload)
        return {...state,arr:[...payload]}
        default:return state
    }
}
export default LIST