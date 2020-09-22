import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate'; /*eslint-disable-line*/

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      total: null,
      next: null,
      operation: null
    }
  }

  handleClick = (btnName) => {
    const result = calculate(this.state.total, this.state.next, btnName)
  }

  render() {
    return (
      <div id="root-app">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
