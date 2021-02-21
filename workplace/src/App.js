// JSXを使用するためのメソッド
// import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
// functional component
const App = () => {
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 5},
    {name: "NoName", age: 3}
  ]
  return (
    <div>
    {
      profiles.map((profile, index) => {
        // keyは仮想DOM（ページ遷移時の変更箇所のDOMのみを読み込む仕組み）の関係上uniqueなkeyの値を指定する必要がある
        return <User name={profile.name} age={profile.age} key={index} />
      })
    }
    </div>
  )
}

// 中括弧部分をpropsという
const User = (props) => {
return <div>Hi, i am {props.name}, and {props.age} old !</div>
}

// 型チェック機構
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
