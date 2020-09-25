import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnName) {
    this.setState(data => calculate(data, btnName));
  }

  render() {
    const { total, next, operation } = this.state;
    const result = next || total || '0';
    return (
      <div id="root-app">
        <Display result={result.toString()} operation={operation} />
        <ButtonPanel handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
