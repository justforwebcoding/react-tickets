import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Checkbox extends Component {
  state = {
    isCheked: false,
  };

  toggleChange = () => {
    this.setState(
      {
        isCheked: !this.state.isCheked,
      },
      () => {
        this.props.addFilter({
          key: this.props.info.key,
          status: this.state.isCheked,
        });
      },
    );
  };

  render() {
    const { info } = this.props;
    return (
      <CheckboxView>
        <label>
          <input onChange={this.toggleChange} type="checkbox" />
          {info.value}
        </label>
      </CheckboxView>
    );
  }
}

export default Checkbox;

Checkbox.propTypes = {
  addFilter: PropTypes.func.isRequired,
};

export const CheckboxView = styled.div``;
