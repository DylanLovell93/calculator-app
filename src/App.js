import './App.css';
import { Component } from 'react';
import Display from './Components/Display';
import Inputs from './Components/Inputs';

const calc = (input) => {
  if (!input) {
    return '0';
  }
  let result = input;
  while (result.includes('X') || result.includes('÷')) {
    let index;
    let op = result.find((e, i) => {
      if (e === 'X' || e === '÷') {
        index = i;
        return e;
      }
    });
    if (op !== -1) {
      let answer =
        op === 'X'
          ? Number(result[index - 1]) * Number(result[index + 1])
          : Math.round(Number(result[index - 1]) / Number(result[index + 1]));
      result.splice(index - 1, 3, answer);
    }
  }
  while (result.includes('+') || result.includes('-')) {
    let index;
    let op = result.find((e, i) => {
      if (e === '+' || e === '-') {
        index = i;
        return e;
      }
    });
    if (op !== -1) {
      let answer =
        op === '+'
          ? Number(result[index - 1]) + Number(result[index + 1])
          : Number(result[index - 1]) - Number(result[index + 1]);
      result.splice(index - 1, 3, answer);
    }
  }
  return result;
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: [],
      previousInput: '',
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
    if (isNaN(Number(userInput.slice(-1)[0])) && !currentInput) {
      return;
    }

    this.setState({
      previousInput: [...userInput, currentInput].join(' '),
      userInput: [],
      currentInput: result,
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
