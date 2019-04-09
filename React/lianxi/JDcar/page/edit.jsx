import React, { Component } from 'react';
import '../mock/mock'
import axios from 'axios'
import { connect } from 'react-redux'

class Edit extends Component {
    state = {
        serverlist: []
    }
    render() {
        let { serverlist } = this.state
        let { list } = this.props
        console.log(list)
        return (
            <div>
                <div className="headr">
                    <span>
                        取消
                    </span>
                    <h6>我的应用编辑</h6>
                    <span onClick={() => { this.props.history.push('/main/sy') }}>完成</span>
                </div>
                <div className="inner">
                        <h3 style={{paddingLeft:'10px',paddingTop:'10px'}}>我的应用</h3>
                            <div className="curMore">
                                {
                                    list && list.map((item, index) => {
                                        return <dl key={index}>
                                            <dd className={item.icon}></dd>
                                            <dt>{item.name}</dt>
                                            <b className='redC' onClick={()=>{
                                                this.reduce(index,item.hao)
                                            }}>-</b>
                                        </dl>
                                    })
                                }
                    </div>
                    <h3 className='line'></h3>
                    <div className="searchSer">
                        <h4>机动车业务</h4>
                        <div className="curMore">
                            {
                                serverlist && serverlist.map((item, index) => {
                                    return <dl key={index}>
                                        <dd className={item.icon}></dd>
                                        <dt>{item.name}</dt>
                                        {
                                            item.hao === true ? <b className='blueC' onClick={() => {
                                                this.add(item, index, item.hao)
                                            }}>+</b> : <b className='redC'>-</b>
                                        }
                                    </dl>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

        );
    }
    componentDidMount() {
        axios.get('/api/list').then(res => {
            if (res.data.code === 1) {
                this.setState({
                    serverlist: res.data.data
                }, () => {
                    console.log(this.state.serverlist)
                })
            }
        })
    }
    add = (item, hao) => {
        let { list, push } = this.props
        list.push(item)
        list && list.map((item, index) => {
            item.hao = !hao
        })
        push(list)
        localStorage.setItem('list',JSON.stringify(list))
    }
    reduce=(i,hao)=>{
        let { list, push } = this.props
        let { serverlist } = this.state
        list.splice(i,1)
        serverlist[i].hao=!hao
        push(list)
        localStorage.setItem('list',JSON.stringify(list))
    }
}

let mapStateToProps = state => {
    return state.LIST
}
let mapDispatchProps = (dispatch) => {
    return {
        push(payload) {
            dispatch({ type: 'PUSH', payload })
        }
    }
}
export default connect(mapStateToProps, mapDispatchProps)(Edit);