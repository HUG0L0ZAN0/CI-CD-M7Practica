// App.jsx
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import './App.css';
import Parrafo from './components/parrafo';
import Reloj from './components/reloj';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      {/* Otros componentes o contenido de tu aplicación */}
      <main style={{ paddingTop: '60px', paddingBottom: '50px' }}>
        {/* Contenido principal */}
      </main>
      <Footer />
      <Reloj></Reloj>
      <Parrafo/>
    </div>
  );
};

export default App;
