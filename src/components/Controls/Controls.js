import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';

class Controls extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Валюта</h2>
          <div>
            <Button />
            <Button />
            <Button />
          </div>
        </div>
        <div>
          <h2>Количество пересадок</h2>
          <div>
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
          </div>
        </div>
      </div>
    );
  }
}

export default Controls;
