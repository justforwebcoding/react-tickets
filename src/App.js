import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import TicketList from './components/TicketList/TicketList';
import Controls from './components/Controls/Controls';

class App extends Component {
  state = {
    array: [],
    currentCurrency: 'RUB',
  };

  handleFilter = (data) => {
    this.setState({ array: data });
  };

  changeCurrentCurrency = (curr) => {
    this.setState({ currentCurrency: curr });
  };

  render() {
    const { array, currentCurrency } = this.state;
    return (
      <Main>
        <Controls
          onChangeCurrency={this.changeCurrentCurrency}
          onFilter={this.handleFilter}
        />
        <TicketList currency={currentCurrency} filterArray={array} />
      </Main>
    );
  }
}

export default App;

const Main = styled.div`
  display: flex;
  justify-content: center;
`;
