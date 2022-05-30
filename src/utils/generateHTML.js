import React from 'react';

import Character from '../components/Character';
import Episode from '../components/Episode';
import Location from '../components/Location';

const generateHTML = (optionToRender, dataToShow) => {
    let dataToRender = null;

    switch (optionToRender) {
        case 'character':
            dataToRender = dataToShow.map(({id, name, species, image}) => {
                return (
                    <Character
                        id={id}
                        name={name}
                        species={species}
                        key={id}
                        imageUrl={image}
                    />
                );
            });
        break;

        case 'episode':
            dataToRender = dataToShow.map(({id, name, air_date, episode}) => {
                return (
                    <Episode
                        id={id}
                        name={name}
                        air_date={air_date}
                        key={id}
                        episode={episode}
                    />
                );
            });
        break;

        case 'location':
            dataToRender = dataToShow.map(({id, name, type, dimension}) => {
                return (
                    <Location
                        id={id}
                        name={name}
                        type={type}
                        dimension={dimension}
                        key={id}
                    />
                );
            });
        break;

        default:

        break;
    }
    
    return dataToRender;
};

export default generateHTML;
