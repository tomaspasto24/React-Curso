import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

const GifExpertApp = ( { defaultCategories = [] } ) => {
    const [categories, setCategories] = useState(defaultCategories);

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