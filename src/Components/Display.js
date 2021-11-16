import './Display.css';
import { Component } from 'react';
import functions from '../data/functions';
const { formatter } = functions;

class Display extends Component {
  render() {
    const { userInput, currentInput, previousInput } = this.props.state;
    return (
      <div className="Display">
        <p className="Previous">
          Ans ={' '}
          {formatter(previousInput).join(' ').length > 30
            ? 'Ans too long'
            : formatter(previousInput).join(' ')}
        </p>
        <p className="Current">
          {userInput.join(' ') || currentInput
            ? (
                formatter(userInput).join(' ') +
                ' ' +
                formatter([currentInput]).join('')
              ).length > 20
              ? 'Number too large'
              : formatter(userInput).join(' ') +
                ' ' +
                formatter([currentInput]).join('')
            : '0'}
        </p>
      </div>
    );
  }
}

export default Display;
