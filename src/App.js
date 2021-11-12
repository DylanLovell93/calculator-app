import './App.css';
import { Component } from 'react';
import Display from './Components/Display';
import Inputs from './Components/Inputs';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      previousInput: '',
    };
  }

  render() {
    return (
      <div className="App">
        <Display />
        <Inputs />
      </div>
    );
  }
}

export default App;
