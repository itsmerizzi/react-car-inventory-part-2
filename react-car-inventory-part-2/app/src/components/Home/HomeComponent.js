import React from "react";
import { Typography, Paper } from '@mui/material';
import './HomeModule.css';

function HomeComponent() {
  return (
    <Paper className="paper-style">
      <Typography variant="h5" color="primary" gutterBottom>
        Página Inicial
      </Typography>
      <img 
        src="./logo512.png" 
        alt="I love Omega CD" 
        className="image-style" 
      />
      <Typography variant="body1">
        Bem-vindo ao CRUD em React
      </Typography>
    </Paper>
  );
}

export default HomeComponent;