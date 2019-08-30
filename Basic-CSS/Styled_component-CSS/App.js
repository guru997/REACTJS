import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/welcome'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';

import './appStyle.css'
import styles from './appStyle.modules.css'

function App() {
  return (
    <div className="App">
      <h1 className = 'error'>Error</h1>
      <h1 className= { styles.success }>Success</h1>
      {/* <Inline /> */}
      {/* <Stylesheet primary = { false } /> */}
      {/* <NameList /> */}
      {/* <UserGreeting />  */}
      {/* <ParentComponent /> */}
      {/* <Message /> */}
      {/* <Counter/> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/*  <EventBind />  */}
      {/* <Greet name = "Bruce" heroname ="Batman">
      <p>This is chidren props</p></Greet>
      <Greet name = "Clark" heroname = "supername"/>
      <button>Action</button>
      <Greet name = "Diana" heroname = "Wonder woman"/>
      <Welcome name = "Bruce" heroname ="Batman"/>
      <Welcome name = "Clark" heroname ="Superman"/>
      <Welcome name = "Diana" heroname ="Wonder Woman"/> */}
    </div>
  );
}

export default App;
