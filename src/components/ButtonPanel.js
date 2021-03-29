import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = props => {
  const { handleClick } = props;

  return (
    <div className="button-panel">
      <div className="row">
        <Button handleClick={handleClick} name="AC" color="#E0E0E0" />
        <Button handleClick={handleClick} name="+/-" color="#E0E0E0" />
        <Button handleClick={handleClick} name="%" color="#E0E0E0" />
        <Button handleClick={handleClick} name="÷" />
      </div>
      <div className="row">
        <Button handleClick={handleClick} name="7" color="#E0E0E0" />
        <Button handleClick={handleClick} name="8" color="#E0E0E0" />
        <Button handleClick={handleClick} name="9" color="#E0E0E0" />
        <Button handleClick={handleClick} name="x" />
      </div>
      <div className="row">
        <Button handleClick={handleClick} name="4" color="#E0E0E0" />
        <Button handleClick={handleClick} name="5" color="#E0E0E0" />
        <Button handleClick={handleClick} name="6" color="#E0E0E0" />
        <Button handleClick={handleClick} name="-" />
      </div>
      <div className="row">
        <Button handleClick={handleClick} name="1" color="#E0E0E0" />
        <Button handleClick={handleClick} name="2" color="#E0E0E0" />
        <Button handleClick={handleClick} name="3" color="#E0E0E0" />
        <Button handleClick={handleClick} name="+" />
      </div>
      <div className="row">
        <Button handleClick={handleClick} name="0" color="#E0E0E0" wide />
        <Button handleClick={handleClick} name="." color="#E0E0E0" />
        <Button handleClick={handleClick} name="=" />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
