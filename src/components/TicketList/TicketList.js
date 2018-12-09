import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Ticket from '../Ticket/Ticket';

class TicketList extends Component {
  state = {
    tickets: [],
  };

  async componentDidMount() {
    try {
      const result = await fetch('http://localhost:3000/tickets.json');
      const tickets = await result.json();
      this.setState({
        tickets: tickets.tickets,
      });
    } catch (e) {
      console.log(e);
    }
  }

  filterArrayByStops = (item) => {
    if (this.props.filterArray[0]) {
      return item;
    }
    if (this.props.filterArray[1] && item.stops === 0) {
      return item;
    }
    if (this.props.filterArray[2] && item.stops === 1) {
      return item;
    }
    if (this.props.filterArray[3] && item.stops === 2) {
      return item;
    }
    if (this.props.filterArray[4] && item.stops === 3) {
      return item;
    }
  };

  render() {
    const { tickets } = this.state;
    const { currency } = this.props;
    return (
      <ListView>
        {tickets
          .filter(this.filterArrayByStops)
          .sort((a, b) => a.price - b.price)
          .map(item => (
            <Ticket key={item.price} ticket={item} curr={currency} />
          ))}
      </ListView>
    );
  }
}

export default TicketList;

TicketList.propTypes = {
  currency: PropTypes.string.isRequired,
};

const ListView = styled.div`
  display: flex;
  flex-direction: column;
`;
