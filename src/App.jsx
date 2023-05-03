import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Button from './components/Button';


function App() {
  const navigate = useNavigate();

  const handleShowHome = () => {
    navigate('home');
  };

  const handleShowProducts = () => {
    navigate('products');
  };

  return (
    <div className="App">
      <hr />
      <Button onClick={() => handleShowHome()} className="button">
        Home
      </Button>
      <Button onClick={() => handleShowProducts()} className="button">
        Products
      </Button>

      <hr />
      <Outlet />
    </div>
  );
}

export default App;
