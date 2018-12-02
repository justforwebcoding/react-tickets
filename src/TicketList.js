import React, { Component } from 'react';
import styled from 'styled-components';
import Ticket from './Ticket';

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
      console.log(tickets.tickets);
    } catch (e) {
      console.log(e);
    }

    // fetch('http://localhost:3000/tickets.json')
    //   .then(response => response.json())
    //   .then((data) => {
    //     this.setState({ tickets: data.tickets });
    //     console.log(data.tickets);
    //   });
  }

  render() {
    const { tickets } = this.state;

    return (
      <ListView>
        {tickets
          .sort((a, b) => a.price - b.price)
          .map(item => (
            <Ticket key={item.price} ticket={item} />
          ))}
      </ListView>
    );
  }
}

export default TicketList;

const ListView = styled.div`
  display: flex;
  flex-direction: column;
`;
