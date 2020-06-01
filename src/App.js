import React from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './component/Menu'
import './App.css';

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
        <NavbarBrand href="/">SK Solution</NavbarBrand>
        </div>
      </Navbar>
      <Menu/>
     </div>
  );
}

export default App;
