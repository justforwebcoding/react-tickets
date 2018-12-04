import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';

class Controls extends Component {
  render() {
    return (
      <ControlsView>
        <Currency>
          <span>валюта</span>
          <Buttons>
            <Button />
            <Button />
            <Button />
          </Buttons>
        </Currency>
        <Quantity>
          <span>количество пересадок</span>
          <Checkboxes>
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
          </Checkboxes>
        </Quantity>
      </ControlsView>
    );
  }
}

export default Controls;

export const ControlsView = styled.div`
  width: 202px;
  height: 331px;
  background-color: #fff;
  box-shadow: 0px 1px 4px 0px rgba(91, 137, 164, 0, 25);

  padding: 20px;
  border-radius: 10px;

  font-size: 12px;
  line-height: 22px;

  text-align: left;
  text-transform: uppercase;

  margin-right: 25px;

  span {
    display: block;
    color: #000;
  }
`;

export const Currency = styled.div`
  width: 100%;
  height: 20%;
  color: #fff;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;

  width: 202px;
  height: 40px;

  margin-top: 10px;

  button:nth-child(1) {
    border-radius: 5px 0 0 5px;
  }

  button:nth-child(3) {
    border-radius: 0 5px 5px 0;
  }

  button:nth-child(1),
  button:nth-child(2) {
    border-right: none;
  }
`;

export const Quantity = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 60%;
`;

export const Checkboxes = styled.div`
  height: 80%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
