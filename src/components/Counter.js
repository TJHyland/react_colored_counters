import React, { Component } from 'react';

class Counter extends Component {
  state = { value: 0 }

  // constructor(props){
  //   super(props);
  //   this.state = { value: 0 }
  //   this.inc = this.inc.bind(this)
  //   this.dec = this.dec.bind(this)
  // }

  inc = () => {
    this.setState({ value: this.state.value + 1})
  }
  dec = () => {
    this.setState({ value: this.state.value - 1})
  }
  render() {
    const { name } = this.props
    return (
      <div>
        <h1 style={{ color: name, fontSize: '12px'}}>{name} counter</h1>
      <p>{this.state.value}</p>
      <button onClick={this.inc}>+</button>
      <button onClick={this.dec}>-</button>
      </div>
    )
  }
}

export default Counter;