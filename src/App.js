import React from 'react';
import Counter from './components/Counter.js'
import CounterClass from './components/CounterClass'
import './App.css';
import TodoContainer from './components/TodoContainer.js';

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <CounterClass /> */}
      {/* <TodoContainer/> */}
    </div>
  );
}

export default App;
