import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Button extends Component {
  state = {
    isActive: !!this.props.status,
  };

  click = () => {
    const { isActive } = this.state;
    const { onChange, value, id } = this.props;
    onChange(isActive, value, id);
  };

  render() {
    const { value } = this.props;
    const { isActive } = this.state;
    return (
      <React.Fragment>
        {isActive ? (
          <ButtonViewActive onClick={this.click}>{value}</ButtonViewActive>
        ) : (
          <ButtonView onClick={this.click}>{value}</ButtonView>
        )}
      </React.Fragment>
    );
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
