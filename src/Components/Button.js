import './Button.css';
import { Component } from 'react';

class Button extends Component {
  render() {
    const { symbol, color } = this.props.info;
    const { func } = this.props;
    const buttonClass = 'Button ' + color;
    return (
      <button className={buttonClass} onClick={func}>
        {symbol}
      </button>
    );
  }
}

export default Button;
