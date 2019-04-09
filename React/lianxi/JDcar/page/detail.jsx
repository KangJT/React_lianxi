import React, { Component } from 'react';

class Detail extends Component {
    render() {
        return (
            <div className='box'>
                <div className="headr">
                    <span onClick={()=>{
                        this.props.history.push('/main/sy')
                    }}>
                        <i className='iconfont icon-xiangzuo'></i>
                        返回
                    </span>
                    <h6>业务中心</h6>
                    <span></span>
                </div>
                <div className='inner'>
                <div className="head">
                    <input type="text" placeholder='搜索' />
                </div>
                <div className="head-bot">
                    <span>违法</span>
                    <span>驾考</span>
                    <span>年检</span>
                    <span>事故</span>
                    <span>挪车</span>
                    <span>违法</span>
                    <span>违法</span>
                    <span>违法</span>
                    <span>违法</span>
                    <span>违法</span>
                </div>
                <h3 className='line'></h3>
                <div className="edit">
                    <h3>我的应用</h3>
                    <span onClick={() => {
                        this.props.history.push('/edit')
                    }}>编辑</span>
                </div>
                <h3 className='line'></h3>
                <div className="searchSer">
                    <h4>机动车业务</h4>
                    <div className="curMore">
                        <dl>
                            <dd className="iconfont icon-qq"></dd>
                            <dt>一键挪车</dt>

                        </dl>
                        <dl>
                            <dd className="iconfont icon-qq"></dd>
                            <dt>机动车检验预约</dt>
                        </dl>
                        <dl>
                            <dd className="iconfont icon-qq"></dd>
                            <dt>备案非本人机动车</dt>
                        </dl>
                        <dl>
                            <dd className="iconfont icon-qq"></dd>
                            <dt>申领免检标志</dt>
                        </dl>
                        <dl>
                            <dd className="iconfont icon-qq"></dd>
                            <dt>遗失补领驾驶证</dt>
                        </dl>
                        <dl>
                            <dd className="iconfont icon-qq"></dd>
                            <dt>期满换领驾驶证</dt>
                        </dl>
                    </div>
                </div>
                <div className="searchSer">
                    <h4>驾驶车业务</h4>
                    <div className="curMore">
                        <dl>
                            <dd className="iconfont icon-weixin"></dd>
                            <dt>一键挪车</dt>
                        </dl>
                        <dl>
                            <dd className="iconfont icon-weixin"></dd>
                            <dt>机动车检验预约</dt>
                        </dl>
                        <dl>
                            <dd className="iconfont icon-weixin"></dd>
                            <dt>备案非本人机动车</dt>
                        </dl>
                        <dl>
                            <dd className="iconfont icon-weixin"></dd>
                            <dt>申领免检标志</dt>
                        </dl>
                        <dl>
                            <dd className="iconfont icon-weixin"></dd>
                            <dt>遗失补领驾驶证</dt>
                        </dl>
                        <dl>
                            <dd className="iconfont icon-weixin"></dd>
                            <dt>期满换领驾驶证</dt>
                        </dl>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Detail;