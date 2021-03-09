import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { numbers, symbols } = props;
  const numberList = numbers.map(number => <button type="button" key={number.toString()}>{number}</button>);
  const symbolList = symbols.map(symbol => <button type="button" key={symbol.toString()}>{symbol}</button>);

  return (
    <div>
      <div>{numberList}</div>
      <div>{symbolList}</div>
    </div>
  );
};

Button.propTypes = {
  numbers: PropTypes.number.isRequired,
  symbols: PropTypes.string.isRequired,
};

export default Button;
