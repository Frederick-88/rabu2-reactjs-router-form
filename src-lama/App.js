import React from 'react';
import {Container} from 'react-bootstrap';

import {BrowserRouter as Route, Router, Link, Switch} from 'react-router-dom';
import Navbar from './components/ToDoApp/Navbar';
import ToDoApp from './components/ToDoApp/Utama';


function App() {
  return (
    <Router>
    <Container>
      <Navbar/>
     
      <ToDoApp/>
    </Container>
    </Router>
  );
}

export default App;
