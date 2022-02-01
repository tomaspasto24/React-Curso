import { heroes } from "../data/Heroes";

export const getHeroByPublisher = ( publisher ) => {

    const validPublishers = ['Marvel Comics', 'DC Comics'];

    if ( !validPublishers.includes(publisher) ) {
        throw new Error(`${publisher} is not valid publisher.`)
    }
    
    return heroes.filter( heroe => heroe.publisher === publisher );
};