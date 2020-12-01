// JSXを使用するためのメソッド
// import React, { Component } from 'react';
import React from 'react';
// class component
// class App extends React.Component {
//   render(){
//     const greeting = "Hi, Tom!";
//     const dom = <h1 chassName="foo">{greeting}</h1>;
//     // returnにはひとつの要素のみしか出力できない
//     return dom;
//   }
// }

// functional component
const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow!!</div>
}

export default App;
