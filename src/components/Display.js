import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { result } = props;

  return (
    <div>
      <div>{result}</div>
    </div>
  );
};

Display.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Display;
