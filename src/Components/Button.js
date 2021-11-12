import { Component } from 'react';

class Button extends Component {
  render() {
    const { symbol } = this.props.info;
    const func = this.props.func;
    return (
      <button className="Button" onClick={func}>
        {symbol}
      </button>
    );
  }
}

export default Button;
