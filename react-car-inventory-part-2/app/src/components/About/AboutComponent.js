import React from "react";
import './AboutModule.css';
import { Typography, Paper } from '@mui/material';

function AboutComponent() {
  return (
    <Paper className="paper-style">
      <Typography variant="h5" color="primary" gutterBottom>
        Sobre
      </Typography>
      <Typography variant="body1">
        Esta é uma aplicação para um CRUD de carros em React utilizando API.
      </Typography>
    </Paper>
  );
}

export default AboutComponent;