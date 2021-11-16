import './Display.css';
import { Component } from 'react';
import functions from '../data/functions';
const { formatter } = functions;

class Display extends Component {
  render() {
    const { userInput, currentInput, previousInput } = this.props.state;
    return (
      <div className="Display">
        <p className="Previous">Ans = {formatter(previousInput).join(' ')}</p>
        <p className="Current">
          {userInput.join(' ') || currentInput
            ? userInput.join(' ') + ' ' + formatter([currentInput]).join('')
            : '0'}
        </p>
      </div>
    );
  }
}

export default Display;
