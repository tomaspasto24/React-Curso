import React from 'react';

export const GifGridItem = ({id, title, url}) => {

    console.log(id, title, url);

    return (
        //Se usa className porque class es una palabra reservada de js. Pero significan lo mismo.
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}