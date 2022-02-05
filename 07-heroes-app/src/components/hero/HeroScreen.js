import React, { useMemo } from 'react';
import 'animate.css';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroById } from '../../helpers/getHeroById';
// import batman from '../../assets/heroes/dc-batman.jpg'; // estático

const heroes = require.context('../../assets/heroes', true);


export const HeroScreen = () => {
  
  const navigate = useNavigate();

  // useParams es un hook que lee la información que se envía por URL, en este caso es el id del heroe.
  // extrae lo que hay en hero/:heroeId del AppRoutes.
  const { heroeId} = useParams();
  
  // const imagePath = `/assets/heroes/${heroeId}.jpg`; // Desde public/assets
  const imagePath = heroes(`./${ heroeId }.jpg`);
  // useMemo es un hook que sirve para memorizar lo que devuelve la función getHeroById y no tenga que volverla a llamar.
  // El segundo argumento es la dependencia, en caso de que heroeId cambie se vuelve a llamar la función.
  const heroe = useMemo( () => getHeroById(heroeId), [heroeId]);

  // En caso de que no se encuentre el heroe (heroe es undefine), se usa el componente navigate para volver al inicio. 
  // Ya que al ser un Functional Component, siempre tiene que devolver algo en HTML, por esto el navigate es un componente. 
  if (!heroe) return <Navigate to={'/'} />
  
  const {id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,} = heroe;
    
  const HandleReturn = () => {   

    // Este navigate conduce al usuario a la página anterior en la que estuvo.
    navigate( -1 );

  };


    return (
    <div className='row mt-5'>
      <div className='col-4'>
          <img 
            src={ imagePath }
            alt={ superhero }
            className='img-thumbnail animate__animated animate__bouncefadeInLeft'  
          />
      </div>

      <div className='col-8'>
          <h3>{ superhero }</h3>
          <ul className='list-group list-group animate__animated animate__bounce'>
              <li className='list-group-item'> <b>ID:</b> { id } </li>
              <li className='list-group-item'> <b>Alter ego:</b> { alter_ego } </li>
              <li className='list-group-item'> <b>Publisher:</b> { publisher } </li>
              <li className='list-group-item'> <b>First Appearance:</b> { first_appearance } </li>
          </ul>

          <h5 className='mt-3'>Characters</h5>
          <p>{ characters }</p>

          <button 
              className='btn btn-outline-info'
              onClick={ HandleReturn }
              >
            Regresar
          </button>
      </div>
    </div>);
};
