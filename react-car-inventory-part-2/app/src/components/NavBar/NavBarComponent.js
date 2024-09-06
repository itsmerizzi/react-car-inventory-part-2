import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function NavBarComponent() {
  return (
    <AppBar style={{ maxWidth: '23vw' }} position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/about">
          Sobre
        </Button>
        <Button color="inherit" component={Link} to="/cars-list">
          Carros
        </Button>
        <Button color="inherit" component={Link} to="/add-car">
          + Carro
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBarComponent;
