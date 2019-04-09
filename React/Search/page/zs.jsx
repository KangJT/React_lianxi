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
                <div className="header">
                    <div className="header-left">
                        <i className='iconfont icon-gengduo-2'></i>
                    </div>
                    <h6>自选</h6>
                    <div className="header-right">
                    <i className='iconfont icon-daishouhuo-01'></i>
                    <i className='iconfont icon-fangdajing'></i>
                    </div>
                </div>
                <div className="nav">
                    <div className="nav-left">
                        <p className='p1'>
                            <span>泸</span><span>2563.00</span>
                        </p>
                        <p className='p2'>+10.94+0.42%</p>
                    </div>
                    <ul className="nav-right">
                        <li>
                            <i className='iconfont icon-zhifu-01'></i>
                            <a href="######">资金</a>
                        </li>
                        <li>
                            <i className='iconfont icon-zhifu-01'></i>
                            <a href="######">新闻</a>
                        </li>
                        <li>
                            <i className='iconfont icon-zhifu-01'></i>
                            <a href="######">广告</a>
                        </li>
                        <li>
                            <i className='iconfont icon-zhifu-01'></i>
                            <a href="######">资产</a>
                        </li>
                    </ul>
                </div>
                <h3 className='h3'></h3>
                <ol className="ol">
                    <li onClick={()=>{
                        this.edit()
                    }}>编辑<i className='iconfont icon-bianji'></i></li>
                    <li>最新</li>
                    <li>涨幅</li>
                    <li>涨跌</li>
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