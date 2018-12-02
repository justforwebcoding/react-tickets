import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Ticket = ({ ticket }) => (
  <TicketView>
    <img src="icon.png" alt="airlines" />
    <p styled="color: blue">HELLOO</p>
    <div>{ticket.departure_time}</div>
    <div>{ticket.arrival_time}</div>
  </TicketView>
);

export default Ticket;

export const TicketView = styled.div`
  box-shadow: 0 0 35px black;
  width: 400px;
`;

Ticket.propTypes = {
  ticket: PropTypes.instanceOf(Object).isRequired,
};
