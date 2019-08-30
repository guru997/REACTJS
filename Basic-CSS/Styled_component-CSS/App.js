import React from 'react';
import logo from './logo.svg';
import './App.css';


import './appStyle.css'
import styles from './appStyle.modules.css'

function App() {
  return (
    <div className="App">
      <h1 className = 'error'>Error</h1>
      <h1 className= { styles.success }>Success</h1>
     
    </div>
  );
}

export default App;
