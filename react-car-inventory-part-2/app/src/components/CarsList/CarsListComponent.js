import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './CarsListModule.css';
import { Typography, List, ListItem, ListItemText, Button, Paper, Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';

function CarsListComponent({ carsList, setCarsList }) {
  const [error, setError] = useState(null);

  // Função para obter a lista de carros, memorizada com useCallback
  const fetchCars = useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:5000/cars');
      setCarsList(response.data);
    } catch (err) {
      console.error('Erro ao obter lista de carros:', err.message);
      setError('Não foi possível obter a lista de carros.');
    }
  }, [setCarsList]);

  const removeCar = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/cars/${id}`);
      fetchCars(); // Recarrega a lista de carros após a exclusão
    } catch (err) {
      console.error('Erro ao deletar carro da lista:', err.message);
      setError('Não foi possível deletar o carro da lista.');
    }
  };

  // useEffect para buscar a lista de carros quando o componente for montado
  useEffect(() => {
    fetchCars();
  }, [fetchCars]); // Adiciona fetchCars como dependência

  return (
    <Paper className="paper-style">
      <Typography variant="h5" color="primary" gutterBottom>
        Lista de Carros
      </Typography>

      {error && (
        <Snackbar
          open={Boolean(error)}
          autoHideDuration={6000}
          onClose={() => setError(null)}
        >
          <Alert onClose={() => setError(null)} severity="error">
            {error}
          </Alert>
        </Snackbar>
      )}

      <List>
        {carsList.map((car) => (
          <ListItem
            key={car.id}
            secondaryAction={
              <Button
                onClick={() => removeCar(car.id)}
                color="secondary"
                variant="contained"
                style={{
                  marginLeft: '16px',
                }}
              >
                Remover
              </Button>
            }
          >
            <ListItemText
              primary={`${car.name} - ${car.brand} - ${car.color} - ${car.year}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default CarsListComponent;
