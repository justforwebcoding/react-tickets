import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import logo from '../../img/logo.svg';

const findTransfers = (count) => {
  let str = '';
  if (count === 0) {
    str = 'без пересадок';
  } else if (count === 1) {
    str = `${count} пересадка`;
  } else {
    str = `${count} пересадки`;
  }
  return str;
};

const Ticket = ({ ticket }) => (
  <TicketView>
    <TicketLeftSide>
      <img src={logo} alt="airlines" />
      <button type="button">
        {'Купить'}
        <br />
        {`за ${ticket.price}  Р`}
      </button>
    </TicketLeftSide>
    <Line />
    <TicketRightSide>
      <From>
        <Time>{ticket.departure_time}</Time>
        <Info>
          <span>{`${ticket.origin},${ticket.origin_name}`}</span>
          <span>{ticket.departure_date}</span>
        </Info>
      </From>
      <Transfer>{findTransfers(ticket.stops)}</Transfer>
      <To>
        <Time>{ticket.arrival_time}</Time>
        <Info>
          <span>{`${ticket.destination_name},${ticket.destination}`}</span>
          <span>{ticket.arrival_date}</span>
        </Info>
      </To>
    </TicketRightSide>
  </TicketView>
);

export default Ticket;

Ticket.propTypes = {
  ticket: PropTypes.instanceOf(Object).isRequired,
};

export const TicketView = styled.div`
  width: 566px;
  height: 161px;
  background-color: #fff;

  margin-bottom: 30px;
  border-radius: 10px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  text-align: center;
`;

export const TicketLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 35%;
  height: 100%;

  img {
    width: 120px;
    height: 35px;
    margin: 20px auto 0px;
  }

  button {
    display: inline-block;
    font-family: "Open Sans";

    padding: 5px 25px;
    margin: 20px;

    background-color: #ff6d00;
    color: #fff;

    box-shadow: none;

    letter-spacing: 0;

    border-radius: 10px;

    font-size: 20px;
    border: none;
  }
`;

export const TicketRightSide = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  padding-bottom: 40px;

  width: 64%;
`;

export const From = styled.div`
  text-align: left;
`;

export const Time = styled.div`
  line-height: 26px;
  font-size: 32px;
  color: #4a4a4a;
`;

export const To = styled.div`
  text-align: right;
`;

export const Transfer = styled.div`
  text-align: center;

  color: #8b9497;
  font-size: 12px;
  text-transform: uppercase;
`;

export const Line = styled.div`
  width: 1px;
  height: 100%;
  background-color: #eceff1;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: #4a4a4a;

  margin-top: 15px;

  span {
    display: block;
  }
`;