import logo from './logo.svg';
import './App.css';

import {useState} from "react";

import Task from './Task';
import Header from './Header';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
