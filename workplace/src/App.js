// JSXを使用するためのメソッド
// import React, { Component } from 'react';
import React from 'react';
// functional component
const App = () => {
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 5},
    {name: "NoName"}
  ]
  return (
    <div>
    {
      profiles.map((profile, index) => {
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

// propsの属性がない場合にここで指定した値を出力できる
User.defaultProps = {
  age:1
}

export default App;
