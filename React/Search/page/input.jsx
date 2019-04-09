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