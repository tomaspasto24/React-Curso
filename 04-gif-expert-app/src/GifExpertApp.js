import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Mario']);

    // const HandleAdd = () => {
    //     setCategories( () => {
    //         return [ 'HunterXHunter', ...categories ]
    //     });
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                { categories.map( cat =>
                    <GifGrid 
                    key={cat}
                    category={cat} 
                    />
                )}
            </ol>
        </>
    )
};

export default GifExpertApp;