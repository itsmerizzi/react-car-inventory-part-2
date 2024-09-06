import axios from 'axios';
import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import './CarFormModule.css';

function CarFormComponent({ car, setCar, carsList, setCarsList }) {
  const [error, setError] = useState(null);

  const addCar = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/cars', car);
      setCarsList([...carsList, response.data]); // Atualiza a lista de carros com o carro adicionado
      setCar({ name: '', brand: '', color: '', year: '' }); // Limpa o formulário
      alert('Carro adicionado com sucesso!');
    } catch (err) {
      console.error('Erro ao adicionar carro:', err.message);
      setError('Não foi possível adicionar o carro.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar({ ...car, [name]: value });
  };

  return (
    <Container maxWidth="sm" className="container-style">
      <Typography variant="h5" color="primary" gutterBottom>
        Adicionar um carro
      </Typography>
      <TextField
        label="Nome"
        name="name"
        value={car.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Marca"
        name="brand"
        value={car.brand}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Cor"
        name="color"
        value={car.color}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Ano"
        name="year"
        value={car.year}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <Button
        onClick={addCar}
        color="primary"
        variant="contained"
        style={{
          marginTop: '20px',
        }}
      >
        Adicionar Carro
      </Button>
    </Container>
  );
}

export default CarFormComponent;