import './Inputs.css';
import { Component } from 'react';
import Button from './Button';
import buttonInfo from '../data/buttonInfo';

class Inputs extends Component {
  render() {
    return (
      <div className="Inputs">
        {buttonInfo.map((e) => (
          <Button info={e} func={this.props[e.func]} />
        ))}
      </div>
    );
  }
}
export default Inputs;
