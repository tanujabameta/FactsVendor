import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// const MyComponent =()=> {
//    return <h2>Way to go you just created a component!!</h2>;
// }

// function Message(props) {
//   return <h1>Good to have you back, {props.username}</h1>;
// }
// function App() {
//   return (<div><Message username="jim" />
//           <Message username="duke" />
//           <Message username="mike" />
//       </div>);
// }

ReactDOM.render(
 // <MyComponent/>,
  <App/>,
  document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
