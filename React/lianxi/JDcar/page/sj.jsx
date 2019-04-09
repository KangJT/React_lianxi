import React, { Component } from 'react';
import { connect } from 'react-redux'
class SY extends Component {
    render() {
       let list=JSON.parse(localStorage.getItem('list'))
       console.log(list)
        return (
            <div className='section'>
                <div className="top"></div>
                <div className="city">
                    <span>所在城市:北京</span>
                    <span>2019年3月6日</span>
                </div>
                <h3 className='line'></h3>
                <div className="section-con">
                <div className="curMore">
                                {
                                    list && list.map((item, index) => {
                                        return <dl key={index}>
                                            <dd className={item.icon}></dd>
                                            <dt>{item.name}</dt>
                                            
                                        </dl>
                                    })
                                }
                         <dl onClick={()=>{
                            this.more()
                        }}>
                        <dt><i className='iconfont icon-jia'></i></dt>
                        <dd>更多</dd>
                    </dl>
                    </div>
                </div>
            </div>
        );
    }
    more=()=>{
        this.props.history.push('/detail')
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
export default connect(mapStateToProps, mapDispatchProps)(SY);