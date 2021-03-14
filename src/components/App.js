import React, { Component } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.resultStr = this.resultStr.bind(this);
  }

  handleClick(buttonName) {
    const { total, next, operation } = this.state;
    const result = calculate({ total, next, operation }, buttonName);
    this.setState(result);
  }

  resultStr() {
    const { total, next, operation } = this.state;
    const result = `${total}${operation}${next}`.replace(/null/g, '');
    return result === '' ? undefined : result;
  }

  render() {
    return (
      <>
        <div className="row main-center cross-center h-100">
          <div className="col">
            <Display result={this.resultStr()} />
            <ButtonPanel handleClick={this.handleClick} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
