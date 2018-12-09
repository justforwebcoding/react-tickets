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

const findCurr = (curr) => {
  let str = '';
  if (curr === 'RUB') {
    str = '₽';
  } else if (curr === 'USD') {
    str = '$';
  } else {
    str = '€';
  }
  return str;
};

const getDate = (data) => {
  const str = data.split('.');
  const date = new Date(+`20${str[2]}`, +str[1], +str[0]);
  const day = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  const month = [
    'янв',
    'фев',
    'мар',
    'апр',
    'май',
    'июн',
    'июль',
    'авг',
    'сен',
    'окт',
    'ноя',
    'дек',
  ];

  return `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}, ${
    day[date.getDay()]
  } `;
};

const Ticket = ({ ticket, curr }) => (
  <TicketView>
    <TicketLeftSide>
      <img src={logo} alt="airlines" />
      <button type="button">
        {'Купить'}
        <br />
        {`за ${ticket.price}  ${findCurr(curr)}`}
      </button>
    </TicketLeftSide>
    <Line />
    <TicketRightSide>
      <From>
        <Time>{ticket.departure_time}</Time>
        <Info>
          <span>{`${ticket.origin},${ticket.origin_name}`}</span>
          <span>{getDate(ticket.departure_date)}</span>
        </Info>
      </From>
      <Transfer>{findTransfers(ticket.stops)}</Transfer>
      <To>
        <Time>{ticket.arrival_time}</Time>
        <Info>
          <span>{`${ticket.destination_name},${ticket.destination}`}</span>
          <span>{getDate(ticket.arrival_date)}</span>
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
  box-shadow: 0px 1px 4px 0px rgba(91, 137, 164, 0, 25);

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

  button:hover {
    cursor: pointer;
    background-color: #ff8124;
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
