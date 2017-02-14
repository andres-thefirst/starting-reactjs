import React, {Component} from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

class TemperatureInput extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = (e) => {
    this.props.onChange(e.target.value);
  }

  render = () => {
    const value = this.props.value;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}: </legend>
        <input value={value} onChange={this.handleChange} />
      </fieldset>
    );
  }
}
 export default TemperatureInput;
