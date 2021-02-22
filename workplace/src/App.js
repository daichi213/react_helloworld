// JSXを使用するためのメソッド
import React, { Component } from 'react';
// functional component
const App = () => {
  return (
    <Counter></Counter>
  )
}

// 中括弧部分をpropsという
class Counter extends Component {
  constructor(props) {
    super(props)
    console.log(this.state)
    this.state = {count: 0}
  }

  handlePlusButton = () => {
    // setStateが実行されるとrenderが毎度実行される。
    this.setState({count: this.state.count + 1})
  }

  handleMinusButton = () => {
    this.setState({count: this.state.count - 1})
  }

  render(){
    // setState実行時に同時に実行される
    console.log("render")
    return (
      // JSX内で使用するスーパークラスは1つでなければ例外が返される。
      // そのため、以下のようにFragmentで囲むことでこの例外は回避できる
      <React.Fragment>
        <div>counter: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
