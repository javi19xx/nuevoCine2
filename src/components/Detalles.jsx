import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/Detalles.css';

const Detalles = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const API_KEY = 'ea959dc0eb55fb309c72805604d83f59';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
        );

        if (!movieResponse.ok) {
          throw new Error('Error en la solicitud');
        }

        const movieData = await movieResponse.json();

        const castResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
        );

        if (!castResponse.ok) {
          throw new Error('Error en la solicitud de reparto');
        }

        const castData = await castResponse.json();

        setMovieDetails(movieData);
        setCast(castData.cast.slice(0, 5));
      } catch (error) {
        console.error('Error al obtener detalles de la película:', error);
      }
    };

    fetchMovieDetails();
  }, [id, API_KEY]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleCompraClick = () => {
    // Aquí puedes manejar la lógica de compra con la fecha seleccionada
    console.log('Fecha seleccionada:', selectedDate);
  };

  return (
    <div>
      {movieDetails && (
        <>
        <br /><br /><br /><br />
          <h2 className='p1'>{movieDetails.title}</h2>
          <p className='p1'>Sinopsis: {movieDetails.overview}</p>
          <p className='p1'>Género: {movieDetails.genres.map((genre) => genre.name).join(', ')}</p>
          <h3>Actores:</h3>
          <>
            {cast.map((actor) => (
              <li className='p1' key={actor.id}>{actor.name}</li>
            ))}
          </>
        </>
      )}
      <br />
      <button className='boton1'>Añadir a Favoritos</button>
      <br /><br />
      <div>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          placeholderText="Selecciona una fecha"
        />
      </div>
      <br />
      <button className='boton1' onClick={handleCompraClick}>Realizar Compra</button>
      <br /><br /><br />
    </div>
  );
};

export default Detalles;
