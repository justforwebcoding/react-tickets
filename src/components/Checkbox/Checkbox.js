import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Checkbox extends Component {
  render() {
    return (
      <CheckboxView>
        <label>
          <input type="checkbox" />

          Hello
</label>
      </CheckboxView>
    );
  }
}

export default Checkbox;

export const CheckboxView = styled.div``;
