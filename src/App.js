import './App.css';
import { Component } from 'react';
import Display from './Components/Display.js';
import Inputs from './Components/Inputs.js';
import functions from './data/functions.js';

const { calc, formatter } = functions;

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: [],
      previousInput: [],
      currentInput: '',
    };
  }

  percent = () => {
    const { currentInput } = this.state;
    this.setState({
      currentInput:
        currentInput === '-'
          ? currentInput
          : (Number(currentInput) / 100).toString(),
    });
  };

  negPos = () => {
    const { currentInput } = this.state;
    this.setState({
      currentInput:
        currentInput[0] === '-' ? currentInput.slice(1) : '-' + currentInput,
    });
  };

  oper = (event) => {
    const { userInput, currentInput } = this.state;
    const valid =
      ((!userInput.slice(-1)[0] && currentInput) || currentInput) &&
      currentInput !== '-';

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
    const { currentInput } = this.state;
    const input = event.target.textContent;
    this.setState({
      currentInput:
        currentInput.includes('.') && input === '.'
          ? currentInput
          : currentInput + event.target.textContent,
    });
  };

  clear = () => {
    this.setState({
      userInput: [],
      currentInput: '',
    });
  };

  equal = () => {
    const { currentInput, userInput } = this.state;
    const result = calc([...userInput, currentInput]);
    if (
      (isNaN(Number(userInput.slice(-1)[0])) && !currentInput) ||
      currentInput === '-'
    ) {
      return;
    }

    this.setState({
      previousInput: [...userInput, currentInput],
      userInput: [],
      currentInput: result.toString(),
    });
  };

  render() {
    return (
      <div className="App">
        <Display state={this.state} />
        <Inputs
          clear={this.clear}
          input={this.input}
          oper={this.oper}
          negPos={this.negPos}
          percent={this.percent}
          equal={this.equal}
        />
      </div>
    );
  }
}

export default App;
