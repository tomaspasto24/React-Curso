import { useEffect, useState } from "react";
import getGifs from "../helpers/getGifs";

const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // Si category cambia se ejecuta el callback del 1er argumento.
    useEffect( () => {
        getGifs(category)
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                })
            })
    }, [category]);

    return state;
}

export default useFetchGifs;