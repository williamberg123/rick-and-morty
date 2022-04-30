import React from 'react';

import PropTypes from 'prop-types';

import Character from '../Character/Character';
import Episode from '../Episode/Episode';
import Location from '../Location/Location';

export default function GenerateHTML({ optionToRender, dataToShow, searchedValue }){
    let dataToRender = null;

    switch (optionToRender) {
        case 'character':
            dataToRender = dataToShow.map(({id, name, species, image}) => {
                return searchedValue
                ? name.includes(searchedValue) && (
                    <Character
                        id={id}
                        name={name}
                        species={species}
                        key={id}
                        imageUrl={image}
                    />
                )
                : (
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
                return searchedValue
                ? name.includes(searchedValue) && (
                    <Episode
                        id={id}
                        name={name}
                        air_date={air_date}
                        key={id}
                        episode={episode}
                    />
                )
                : (
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
                return searchedValue
                ? name.includes(searchedValue) && (
                    <Location
                        id={id}
                        name={name}
                        type={type}
                        dimension={dimension}
                        key={id}
                    />
                )
                : (
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

    return (
        <React.Fragment>
            {dataToRender}
        </React.Fragment>
    );
}

GenerateHTML.propTypes = {
    optionToRender: PropTypes.string.isRequired,
    dataToShow: PropTypes.instanceOf(Array).isRequired,
    searchedValue: PropTypes.string
};
