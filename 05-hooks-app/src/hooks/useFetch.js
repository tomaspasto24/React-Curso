import React, {useState, useEffect, useRef} from 'react'

export const useFetch = ( url ) => {

    const isMounted = useRef(true);
    
    useEffect( () => {

        // Cuando el componente se desmonte, se cambia isMounted por false. 
        return () => {
            isMounted.current = false;
        }

    }, [])

    const [state, setstate] = useState({
        loading: true,
        error: null,
        data: null
    });

    useEffect(() => {
        
        setstate({
            loading: true,
            error: null,
            data: null
        });

        fetch(url)
            .then( (resp) => resp.json() )
            .then( data => {

                if (isMounted.current)
                {
                    setstate({
                        loading: false,
                        error: null,
                        data,
                    });
                };

            })

    }, [url])

    return state;
}
