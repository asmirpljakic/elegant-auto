import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';

import styled from 'styled-components';

function App() {
  const Button = styled.button`
    background-color: tomato;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
  `;

  const Container = styled.div`
    background-color: tan;
  `;

  return (
    <div>
      <h4>Elegant Code</h4>
      <Button>Click me</Button>
      <Container>
        <h3>Zdravo!</h3>
      </Container>
    </div>
  );
}

export default App;
