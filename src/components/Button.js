import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const {
    name,
    handleClick,
    color,
    wide,
  } = props;

  return (
    <button type="button" onClick={() => handleClick(name)} style={{ backgroundColor: color, width: wide ? '50%' : '25%' }}>
      {name}
    </button>
  );
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

export default Button;
