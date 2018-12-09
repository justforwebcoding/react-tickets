import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';

class Controls extends Component {
  state = {
    currency: ['RUB', 'USD', 'EUR'],
    changedCurrency: 'RUB',
    status: [true, false, false],
    quantity: [
      {
        key: 0,
        value: 'Все',
      },
      {
        key: 1,
        value: 'Без пересадок',
      },
      {
        key: 2,
        value: '1 пересадка',
      },
      {
        key: 3,
        value: '2 пересадки',
      },
      {
        key: 4,
        value: '3 пересадки',
      },
    ],
    checkArray: [false, false, false, false, false],
  };

  checkItem = (data) => {
    const { checkArray } = this.state;
    const { onFilter } = this.props;
    const state = { ...this.state };
    state.checkArray[data.key] = data.status;
    this.setState(state, () => {
      onFilter(checkArray);
    });
  };

  changeCurrency = (stat, value, id) => {
    const { onChangeCurrency } = this.props;
    const state = { ...this.state };
    if (!stat) {
      state.status = state.status.map(item => (item = false));
      state.status[id] = true;
      state.changedCurrency = value;
      this.setState(state, () => {
        onChangeCurrency(this.state.changedCurrency);
      });
    }
  };

  render() {
    const { currency, quantity, status } = this.state;
    return (
      <ControlsView>
        <Currency>
          <span>валюта</span>
          <Buttons>
            <Button
              id={0}
              status={status[0]}
              onChange={this.changeCurrency}
              value={currency[0]}
            />
            <Button
              id={1}
              status={status[1]}
              onChange={this.changeCurrency}
              value={currency[1]}
            />
            <Button
              id={2}
              status={status[2]}
              onChange={this.changeCurrency}
              value={currency[2]}
            />
          </Buttons>
        </Currency>
        <Quantity>
          <span>количество пересадок</span>
          <Checkboxes>
            <Checkbox addFilter={this.checkItem} info={quantity[0]} />
            <Checkbox addFilter={this.checkItem} info={quantity[1]} />
            <Checkbox addFilter={this.checkItem} info={quantity[2]} />
            <Checkbox addFilter={this.checkItem} info={quantity[3]} />
            <Checkbox addFilter={this.checkItem} info={quantity[4]} />
          </Checkboxes>
        </Quantity>
      </ControlsView>
    );
  }
}

export default Controls;

Controls.propTypes = {
  onFilter: PropTypes.func.isRequired,
  onChangeCurrency: PropTypes.func.isRequired,
};

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

  button:nth-child(1):hover + button:nth-child(2),
  button:nth-child(2):hover + button:nth-child(3) {
    border-left: none;
  }

  button:nth-child(1):hover,
  button:nth-child(2):hover {
    border-right: 1px solid #64b5f5;
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
