
import MovieSlider from '../../components/MovieSlider';
import React, { useEffect, useState } from 'react';


const API_KEY = 'ea959dc0eb55fb309c72805604d83f59';
const Principal = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchMovies = async () => {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es&page=1&results=5`
          );
  
          if (!response.ok) {
            throw new Error('Error al obtener las películas');
          }
  
          const data = await response.json();
          setMovies(data.results);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };
  
      fetchMovies();
    }, []);


  return (
    <>
 <br /><br /><br /><br /><br />
 <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Cinzel', serif" }}>Peliculas Populares:</h2>
<div className="flex-grow" style={{ paddingTop: '60px' }}>
        {loading ? (
          <p>Cargando...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <MovieSlider movies={movies} />
        )}
      </div>
      
      <div className="bg-gray-200 p-4 ">
  <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Cinzel', serif" }}>¡Descubre nuestras ofertas!</h2>
  <p className="text-lg "style={{ fontFamily: "'Cinzel', serif" }}>
    En nuestro cine, queremos que <b> disfrutes al máximo</b> de tu experiencia cinematográfica. <b>¡No te pierdas estas increíbles ofertas especiales!</b>
  </p>

  <hr className="my-8" />
  <div className="my-4">
    <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Cinzel', serif" }}>Oferta 2x1 en Boletos</h3>
    <p className="text-lg" style={{ fontFamily: "'Cinzel', serif" }}>Compra un boleto y recibe el <b> segundo de menor valor ¡totalmente gratis!</b> Ideal para <b> disfrutar del cine</b> con amigos o familiares.</p>
  </div>

<hr className='hr1' />
  <div className="my-4">
    <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Cinzel', serif" }}>Combo Especial</h3>
    <p className="text-lg" style={{ fontFamily: "'Cinzel', serif" }}>Aprovecha nuestro <b> combo especial</b> que incluye <b> una entrada, palomitas de maíz grandes y dos bebidas</b> a un <b> precio reducido.</b> ¡La combinación perfecta para tu película!</p>
  </div>

  <hr />
  <div className="my-4">
    <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Cinzel', serif" }}>Días de Descuento</h3>
    <p className="text-lg" style={{ fontFamily: "'Cinzel', serif" }}>¡Disfruta de <b> descuentos exclusivos</b> en boletos y snacks los días <b> martes y jueves!</b> No pierdas la oportunidad de <b> ahorrar</b> mientras <b> disfrutas</b> de las <b> mejores películas.</b></p>
  </div>
</div>

      
    </>
  )
}

export default Principal