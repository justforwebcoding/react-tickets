import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Button extends Component {
  render() {
    return <ButtonView>Kek</ButtonView>;
  }
}

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
  }
`;
