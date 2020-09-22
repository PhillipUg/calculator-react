import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ handleClick }) => {
  const buttonGroups = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  const orangeBtns = ['÷', 'x', '-', '+', '='];

  const buttonList = buttonGroups.map(btnGrp => (
    <div className="btn-grp" key={Math.random()}>
      {
        btnGrp.map(btn => (orangeBtns.includes(btn) ? <Button key={Math.random()} name={btn} handleClick={handleClick} /> /*eslint-disable-line*/
          : btn === '0' ? <Button key={Math.random()} name={btn} color="#E0E0E0" wide handleClick={handleClick} />
            : <Button key={Math.random()} name={btn} color="#E0E0E0" handleClick={handleClick} />))
      }
    </div>
  ));

  return (
    <div>
      { buttonList}
    </div>
  );
};

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
