import './Inputs.css';
import { Component } from 'react';
import Button from './Button';
import buttonInfo from '../data/buttonInfo';

class Inputs extends Component {
  render() {
    return (
      <div className="Inputs">
        {buttonInfo.map((button) => (
          <Button info={button} func={this.props[button.func]} />
        ))}
      </div>
    );
  }
}
export default Inputs;
