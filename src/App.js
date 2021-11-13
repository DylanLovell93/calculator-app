import './App.css';
import { Component } from 'react';
import Display from './Components/Display';
import Inputs from './Components/Inputs';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: [],
      previousInput: '',
      currentInput: '',
    };
  }

  oper = (event) => {
    const { userInput, currentInput } = this.state;
    const valid = (!userInput.slice(-1)[0] && currentInput) || currentInput;

    this.setState({
      userInput: valid
        ? [...userInput, currentInput, event.target.textContent]
        : userInput.slice(-1)[0]
        ? [...[...userInput].slice(0, -1), event.target.textContent]
        : userInput,
      currentInput: valid ? '' : currentInput,
    });
  };

  input = (event) => {
    this.setState({
      currentInput: this.state.currentInput + event.target.textContent,
    });
  };

  clear = () => {
    this.setState({
      userInput: [],
      currentInput: '',
    });
  };

  render() {
    return (
      <div className="App">
        <Display state={this.state} />
        <Inputs clear={this.clear} input={this.input} oper={this.oper} />
      </div>
    );
  }
}

export default App;
