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
      operation: null, /*eslint-disable-line*/
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnName) {
    this.setState(data => calculate(data, btnName));
  }

  render() {
    const { total, next } = this.state;
    const result = next || total || '0';
    return (
      <div id="root-app">
        <Display result={result.toString()} />
        <ButtonPanel handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
