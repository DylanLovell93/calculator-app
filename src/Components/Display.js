import './Display.css';
import { Component } from 'react';

class Display extends Component {
  render() {
    const { userInput, currentInput, previousInput } = this.props.state;
    return (
      <div className="Display">
        <p className="Previous">Ans = {previousInput.join(' ')}</p>
        <p className="Current">
          {userInput.join(' ') || currentInput
            ? userInput.join(' ') + ' ' + currentInput
            : '0'}
        </p>
      </div>
    );
  }
}

export default Display;
