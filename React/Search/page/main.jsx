import React, { Component } from 'react';
import {Link,Route,Switch,Redirect} from 'react-router-dom'
import '../../fonts/iconfont.css'
import '../css/index.css'
import SJ from '../page/sj'
import HQ from '../page/hq'
import ZS from '../page/zs'
import JY from '../page/jy'
import ZX from '../page/zx'
class Main extends Component {
    render() {
        return (
            <React.Fragment>
               <Switch>
                   <Route path='/main' render={()=><Redirect to='/main/zs'/>} exact/>
                   <Route path='/main/sj' component={SJ}/>
                   <Route path='/main/hq' component={HQ}/>
                   <Route path='/main/zs' component={ZS}/>
                   <Route path='/main/jy' component={JY}/>
                   <Route path='/main/zx' component={ZX}/>
               </Switch>
               <div className="footer">
                    <dl>
                        <dt>
                            <i className='iconfont icon-iconhuidaoshouye'></i>
                        </dt>
                        <dd>
                            <Link to='/main/sj'>首页</Link>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <i className='iconfont icon-wodedingdan'></i>
                        </dt>
                        <dd>
                            <Link to='/main/hq'>行情</Link>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <i className='iconfont icon-gerenxinxi'></i>
                        </dt>
                        <dd>
                            <Link to='/main/zs'>自遂</Link>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <i className='iconfont icon-zhifu-01'></i>
                        </dt>
                        <dd>
                            <Link to='/main/jy'>交易</Link>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <i className='iconfont icon-fangdajing'></i>
                        </dt>
                        <dd>
                            <Link to='/main/zx'>咨询</Link>
                        </dd>
                    </dl>
               </div>
       </React.Fragment>
        );
    }
}

export default Main;