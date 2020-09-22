import React from 'react';
import Button from './Button';

const ButtonPanel = () => (
  <div className="button-groups">
    <div className="btn-grp">
      <Button name="AC" color="#E0E0E0" />
      <Button name="+/-" color="#E0E0E0" />
      <Button name="%" color="#E0E0E0" />
      <Button name="÷" />
    </div>
    <div className="btn-grp">
      <Button name="7" color="#E0E0E0" />
      <Button name="8" color="#E0E0E0" />
      <Button name="9" color="#E0E0E0" />
      <Button name="&times;" />
    </div>
    <div className="btn-grp">
      <Button name="4" color="#E0E0E0" />
      <Button name="5" color="#E0E0E0" />
      <Button name="6" color="#E0E0E0" />
      <Button name="&minus;" />
    </div>
    <div className="btn-grp">
      <Button name="1" color="#E0E0E0" />
      <Button name="2" color="#E0E0E0" />
      <Button name="3" color="#E0E0E0" />
      <Button name="+" />
    </div>
    <div className="btn-grp last-grp">
      <Button name="0" color="#E0E0E0" wide />
      <Button name="." color="#E0E0E0" />
      <Button name="=" />
    </div>
  </div>
);
export default ButtonPanel;
