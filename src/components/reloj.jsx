// src/components/Reloj.jsx
import { useState, useEffect } from 'react';
import './reloj.css'; // Importa los estilos específicos del reloj

const Reloj = () => {
  const [hora, setHora] = useState(new Date());
  const [formato24Horas, setFormato24Horas] = useState(true); // Estado para el formato de hora

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);

    // Limpia el intervalo al desmontar el componente
    return () => clearInterval(intervalo);
  }, []);

  const formatoHora = (num) => (num < 10 ? `0${num}` : num);

  const cambiarFormatoHora = () => {
    setFormato24Horas((prevFormato) => !prevFormato); // Cambia entre 12 y 24 horas
  };

  const obtenerHoraFormateada = () => {
    let horas = hora.getHours();
    let minutos = hora.getMinutes();
    let segundos = hora.getSeconds();

    if (!formato24Horas) {
      // Formato de 12 horas
      const ampm = horas >= 12 ? 'PM' : 'AM';
      horas = horas % 12 || 12; // Convierte 0 a 12 para formato de 12 horas
      return `${formatoHora(horas)}:${formatoHora(minutos)}:${formatoHora(segundos)} ${ampm}`;
    } else {
      // Formato de 24 horas
      return `${formatoHora(horas)}:${formatoHora(minutos)}:${formatoHora(segundos)}`;
    }
  };

  return (
    <div className="reloj-contenedor">
      <h1 className="reloj">{obtenerHoraFormateada()}</h1>
      <button className="boton-actualizar" onClick={cambiarFormatoHora}>
        {formato24Horas ? 'Cambiar a 12 horas' : 'Cambiar a 24 horas'}
      </button>
    </div>
  );
};

export default Reloj;
