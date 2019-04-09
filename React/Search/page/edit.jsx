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