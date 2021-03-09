import React from 'react';
import Button from './Button';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const symbols = ['+', '-', '*', '/', '='];

const ButtonPanel = () => (
  <div>
    <div>Button Panel</div>
    <Button numbers={numbers} symbols={symbols} />
  </div>
);

export default ButtonPanel;
