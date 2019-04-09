import React, { Component } from "react";
// import InputBox from "./InputBox";
import DeleteBox from "./DeleteBox";
class App extends Component {
  constructor() {
    super();
    this.state = {
      delete: true
    };
    this._input = React.createRef()
  }
  render() {
    return (
      <div>
        <div>
        <input type="text" ref={this._input} />
        <button onClick={this.handleDel}>执行命令</button>
        </div>
        <div>{this.state.delete ? <DeleteBox /> : null}</div>
      </div>
    );
  }
  handleDel = () => {
    const inputValue = this._input.current.value
    console.log(inputValue)
    if(inputValue === 'delete' || inputValue === '销毁'){
      this.setState({
        delete:false
      })
    }
  };
  shouldComponentUpdate(nextProps,nextState){
    if(!nextState.delete){
      return true
    }
    return false
  }
}

export default App;
