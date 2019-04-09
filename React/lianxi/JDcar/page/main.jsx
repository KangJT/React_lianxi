import React, { Component } from 'react';
import { Link, Switch, Redirect, Route } from 'react-router-dom';
import '../css/index.css'
import '../../fonts/iconfont.css'
import DD from '../page/dd'
import SY from '../page/sj'
import FX from '../page/fx'
import MY from '../page/my'
class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path='/main' render={()=><Redirect  to='/main/sy' />} exact/>
                    <Route path='/main/sy' component={SY} />
                    <Route path='/main/dd' component={DD} />
                    <Route path='/main/fx' component={FX} />
                    <Route path='/main/My' component={MY} />
                </Switch>
            <div className='footer'>
                <dl>
                    <dt>

                    </dt>
                    <dd>
                        <Link to='/main/sy'>首页</Link>
                    </dd>
                </dl>
                <dl>
                    <dt></dt>
                    <dd>
                        <Link to='/main/dd'>网版速度</Link>
                    </dd>
                </dl>
                <dl>
                    <dt></dt>
                    <dd>
                        <Link to='/main/fx'>办事网店</Link>
                    </dd>
                </dl>
                <dl>
                    <dt></dt>
                    <dd>
                        <Link to='/main/My'>服务中心</Link>
                    </dd>
                </dl>
            </div>
        </React.Fragment>
        );
    }
}

export default Main;