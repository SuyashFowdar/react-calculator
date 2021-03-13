import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate'; // eslint-disable-line

const App = () => (
  <>
    <div className="row main-center cross-center h-100">
      <div className="col">
        <Display />
        <ButtonPanel />
      </div>
    </div>
  </>
);

export default App;
