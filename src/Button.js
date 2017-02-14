import React, { Component } from 'react';

class Button extends Component {

  constructor(props){
    super(props)
    this.state = {
        counter: this.props.increment
    };
    this.consoleLog = () => {
      this.setState((preState, props) => ({ counter: parseInt(preState.counter, 10) + parseInt(this.props.increment, 10)}));
    }
  }

  buttonEvent = () => {
    this.consoleLog();
  }

  render = () => (
    <button onClick={this.buttonEvent}>Clicked times: {this.state.counter}</button>
  );
}

export default Button;
