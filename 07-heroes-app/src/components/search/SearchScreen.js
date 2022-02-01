import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { heroes } from '../../data/Heroes';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../hero/HeroCard';
import queryString from 'query-string';

export const SearchScreen = () => {
  
  const navigate = useNavigate();
  const location = useLocation(); // Sirve para leer el URL.
  
  // queryString convierte todo el query en un objeto con propiedades.
  const { q = '' } = queryString.parse(location.search);
  
  const [value, reset, handleInputChange] = useForm({
    searchText: q
  });

  const handleSearch = (e) => {
      e.preventDefault();
      // Se envía el searchText como argumento en el URL.
      navigate(`?q=${value.searchText}`);

  }

  const [heroList, setHeroList] = useState([]);
  
  // Se hace una lista de heroes con los que coincide la busqueda para mostrar como opciones.
  useEffect( () => {
      setHeroList(heroes.filter( heroe => heroe.superhero.toLocaleLowerCase().includes(value.searchText.toLocaleLowerCase()) ));   
    }, [value.searchText])

  return (
  <>
    <h1>Búsqueda</h1>
    <hr />
    <div className='row'>
      <div className='col-5'>
        
        <h4>Buscar</h4>
        <hr />

        {
          (q === '') ? <div className='alert alert-info'> Buscar un héroe </div>
          : (heroList.length == 0) && <div className='alert alert-danger'>No hay resultados: {q} </div>
        }

              
        <form onSubmit={ handleSearch }>
          <input  
              type='text' 
              className='form-control'
              placeholder='Buscar un héroe'
              name='searchText'
              value={ value.searchText }
              onChange={ handleInputChange }
          />
          <button 
              className='btn btn-outline-primary mt-1'
              type='submit'
          >
            Buscar...
          </button>
        </form>

      </div>
    </div>

    <div className='row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn'>
        {
            heroList.map( heroe => (
              <HeroCard key={ heroe.id } { ...heroe } /> 
            ))            
        }
    </div>

  </>
  );
};
