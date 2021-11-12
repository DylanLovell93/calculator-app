import { Component } from 'react';

class Display extends Component {
  render() {
    const { userInput, currentInput } = this.props.state;
    return (
      <div>
        <p>
          {userInput.join(' ') || currentInput
            ? userInput.join(' ') + ' ' + currentInput
            : '0'}
        </p>
      </div>
    );
  }
}

export default Display;
