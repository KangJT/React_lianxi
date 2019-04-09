import React, { Component } from "react";

class Cuttle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "none",
      title:props.title,
      totleMoney:props.totleMoney,
      time:props.time,
      list: props.list
    };
  }

  render() {
    return (
      <div>
        <div className="header" onClick={this.handleShow}>
          <span>{this.state.title}</span>---<span>{this.state.totleMoney}</span>
        </div>
        <div style={{ display: this.state.show }}>
          <ul>
            {this.state.list.map((item, index) => (
              <li key={index}>
                <span>{item.time}</span>
                {item.list.map((it, i) => (
                  <div key={i}>
                    <span>{it.con}</span>---
                    <span>{it.money}</span>
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  handleShow = () => {
    this.state.show === "none"
      ? this.setState({ show: "block" })
      : this.setState({
          show: "none"
        });
  };
}

export default Cuttle;
