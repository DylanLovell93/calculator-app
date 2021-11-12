import { Component } from 'react';

class Button extends Component {
  render() {
    const { func, symbol } = this.props;
    return <button onClick={func}>{symbol}</button>;
  }
}

export default Button;
