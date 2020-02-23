import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import Buttons from './component/Buttons';

const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <AppContainer className="App">
        <H1> Hello, my calculator, this is made by React! </H1>

        <ButtonArea>
          {
            number.map((row) => <Buttons key={row} value={row} buttonColor="#f1f3f4" />)
          }
        </ButtonArea>
      </AppContainer>
    );
  }
}

export default hot(module)(App);

const ButtonArea = styled.div`
  width: 240px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const H1 = styled.h1`
  color: red;
`;

const AppContainer = styled.div`
  margin: 1rem;
  font-family: Arial, Helvetica, sans-serif;
`;
