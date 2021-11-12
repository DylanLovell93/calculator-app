import { Component } from 'react';

class Display extends Component {
  render() {
    const { userInput } = this.props.state;
    return (
      <div>
        <p>{userInput ? userInput : '0'}</p>
      </div>
    );
  }
}

export default Display;
