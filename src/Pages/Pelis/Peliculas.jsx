import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Peliculas.css'
import Detalles from '../../components/Detalles';

const Peliculas = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=ea959dc0eb55fb309c72805604d83f59&query=${query}`
      );

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }

      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error al buscar películas:', error);
    }
  };

  const handleMovieClick = (id) => {
    setSelectedMovieId(id);
  };

  return (
    <div>
      <br /><br /><br /><br /><br /><br />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Escriba el título"
      />
      <br />
      <br />
      <button className='boton' onClick={handleSearch}>Buscar</button>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/pelicula/${movie.id}`}>
              <h3 className='titulo'>{movie.title}</h3>
              {movie.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={`Poster de ${movie.title}`}
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
      {selectedMovieId && <Detalles id={selectedMovieId} />}
      <br /><br /><br />
    </div>
  );
};

export default Peliculas;
