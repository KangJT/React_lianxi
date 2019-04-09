import React, { Component } from "react";
import Cuttle from "./Cuttle";
class Tab extends Component {
  constructor() {
    super();
    this.state = {
      tab: true,
      list: [
        {
          title: " 收入1",
          totleMoney: 200,
          list: [
            {
              time: "9.1",
              list: [
                {
                  con: "doufu",
                  money: 20
                },
                {
                  con: "doufu",
                  money: 20
                },
                {
                  con: "doufu",
                  money: 20
                }
              ]
            },
            {
              time: "9.2",
              list: [
                {
                  con: "doufu1111",
                  money: 20
                },
                {
                  con: "doufu1111",
                  money: 20
                },
                {
                  con: "doufu",
                  money: 20
                }
              ]
            }
          ]
        },
        {
          title: " 收入2",
          totleMoney: 200,
          list: [
            {
              time: "9.1",
              list: [
                {
                  con: "douf22222u",
                  money: 20
                },
                {
                  con: "douf2222u",
                  money: 20
                },
                {
                  con: "doufu",
                  money: 20
                }
              ]
            },
            {
              time: "9.2",
              list: [
                {
                  con: "douf3333u",
                  money: 20
                },
                {
                  con: "douf3333u",
                  money: 20
                },
                {
                  con: "doufu",
                  money: 20
                }
              ]
            }
          ]
        },
        {
          title: " 收入3",
          totleMoney: 200,
          list: [
            {
              time: "9.1",
              list: [
                {
                  con: "douf4444u",
                  money: 20
                },
                {
                  con: "dou4444fu",
                  money: 20
                },
                {
                  con: "doufu",
                  money: 20
                }
              ]
            },
            {
              time: "9.2",
              list: [
                {
                  con: "dou5555fu",
                  money: 20
                },
                {
                  con: "douf5555u",
                  money: 20
                },
                {
                  con: "doufu5555",
                  money: 20
                }
              ]
            }
          ]
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <div>
          <span onClick={this.handleWithdraw}>提现</span>    
          <span onClick={this.handleRecord}>记录</span>
        </div>
        {this.state.tab ? (
          <div className="money">
          {this.state.list.map((item,index)=>(
            <Cuttle title={item.title} totleMoney={item.totleMoney} list={item.list} key={index}/>
          )
            
          )}
            
          </div>
        ) : (
          <div className="write">记录</div>
        )}
      </div>
    );
  }
  handleWithdraw = () => {
    this.setState({
      tab: true
    });
  };
  handleRecord = () => {
    this.setState({
      tab: false
    });
  };
}

export default Tab;
