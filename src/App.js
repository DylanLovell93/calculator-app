import './App.css';
import { Component } from 'react';
import Display from './Components/Display';
import Inputs from './Components/Inputs';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '0837',
      previousInput: '',
    };
  }

  clear = () => {
    this.setState({
      userInput: '',
    });
  };

  render() {
    return (
      <div className="App">
        <Display state={this.state} />
        <Inputs clear={this.clear} />
      </div>
    );
  }
}

export default App;
