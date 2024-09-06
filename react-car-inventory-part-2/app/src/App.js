import './App.css';
import logo from './logo.svg';
import NavBarComponent from './components/NavBar/NavBarComponent';
import HomeComponent from './components/Home/HomeComponent';
import AboutComponent from './components/About/AboutComponent';
import CarsListComponent from './components/CarsList/CarsListComponent';
import CarFormComponent from './components/CarForm/CarFormComponent';
import { useState } from 'react';
import { Container, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [carsList, setCarsList] = useState([]);
  const [car, setCar] = useState({ name: '', brand: '', color: '', year: '' });

  return (
    <Router>
      <CssBaseline />
      <div className="App">
        <header>
          <div style={{ display: 'flex', maxWidth: '100vw', alignItems: 'center', padding: '10px', backgroundColor: '#1976d2' }}>
            <img src={logo} alt="logo" style={{ height: '40px', marginRight: '20px' }} />
            <NavBarComponent />
          </div>
        </header>
        <main>
          <Container maxWidth="lg" style={{ padding: '20px' }}>
            <Routes>
              <Route path="/" element={<HomeComponent />} />
              <Route path="/about" element={<AboutComponent />} />
              <Route path="/cars-list" element={<CarsListComponent carsList={carsList} setCarsList={setCarsList} />} />
              <Route path="/add-car" element={<CarFormComponent car={car} setCar={setCar} carsList={carsList} setCarsList={setCarsList} />} />
            </Routes>
          </Container>
        </main>
      </div>
    </Router>
  );
}

export default App;
