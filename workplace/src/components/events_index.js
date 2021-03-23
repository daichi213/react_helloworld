// JSXを使用するためのメソッド
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions'

// 中括弧部分をpropsという
class EventsIndex extends Component {
  render(){
    const props = this.props
    return (
      // JSX内で使用するスーパークラスは1つでなければ例外が返される。
      // そのため、以下のようにFragmentで囲むことでこの例外は回避できる
      <React.Fragment>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({value: state.count.value})
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})
// 略式記述
// const mapDispatchToProps = ({ increment, decrement})

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
