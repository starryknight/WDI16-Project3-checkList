import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from'styled-components'

const HomeWrap = styled.div`
margin: 0 auto;
padding: 85px;

`

class HomePage extends Component {
  render() {
    return (
      <center>
      <HomeWrap>
        <h1>Welcome to ✓List</h1>
        <p>never forget what you came to the store for again!</p>

        <Link to="/users"><button>Enter</button></Link>

      </HomeWrap>
      </center>
    );
  }
}

export default HomePage;