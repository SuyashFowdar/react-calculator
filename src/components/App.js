import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

class App {
  constructor() {
    this.total = null;
    this.next = null;
    this.operation = null;
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
