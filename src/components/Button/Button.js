import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Button extends Component {
  click = () => {
    const {
 onChange, value, id, status 
} = this.props;
    const isActive = !!status;
    if (!isActive) {
      onChange(isActive, value, id);
    }
  };

  render() {
    const { value, status } = this.props;
    const isActive = !!status;

    if (isActive) {
      return <ButtonViewActive onClick={this.click}>{value}</ButtonViewActive>;
    }
    return <ButtonView onClick={this.click}>{value}</ButtonView>;
  }
}

Button.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  status: PropTypes.bool.isRequired,
};

export default Button;

export const ButtonView = styled.button`
  display: block;
  color: #2196f3;
  background-color: #fff;

  width: 33%;
  height: auto;

  margin: 0px;
  border: 1px solid #d2d5d6;

  :hover {
    cursor: pointer;
    background-color: #f2fcff;
    border-color: #64b5f5;
  }
`;

export const ButtonViewActive = styled.button`
  display: block;
  color: #fff;
  background-color: #2196f3;

  width: 33%;
  height: auto;

  margin: 0px;
  border: 1px solid #d2d5d6;
`;
