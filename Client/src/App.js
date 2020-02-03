import React from 'react';
import './App.css';
import Login from './components/Login'

function App() {
  return (
    <div className="App">
    <div>
      <ul>
        <div>Home</div>
        <div>Login</div>
        <div>Register</div>
        <div>Logout</div>
      </ul>
    </div>
    <Login/>
    </div>
  );
}

export default App;
