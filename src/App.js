import React from 'react';
import './App.css';
import styled from 'styled-components';
import TicketList from './components/TicketList/TicketList';
import Controls from './components/Controls/Controls';

const App = () => (
  <Main>
    <Controls />
    <TicketList />
  </Main>
);

export default App;

const Main = styled.div`
  display: flex;
  justify-content: center;
`;
