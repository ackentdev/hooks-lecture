import React from 'react';
import Counter from './components/Counter.js'
import CounterClass from './components/CounterClass'
import BigTodo from './components/BigTodo'
import './App.css';
import TodoContainer from './components/TodoContainer.js';

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <CounterClass /> */}
      {/* <TodoContainer/> */}
      {/* <BigTodo /> */}
    </div>
  );
}

export default App;
