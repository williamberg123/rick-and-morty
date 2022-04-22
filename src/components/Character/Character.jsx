import React from 'react';
import PropTypes from 'prop-types';

import './Character.css';

export default function Character({ name, species, imageUrl }){
    return(
        <div className="Character">
            <img src={imageUrl} alt={name} />
            <div className="shadow"></div>
            <div className="Character-info">
                <h3>{name.toUpperCase()}</h3>
                <p>{species}</p>
            </div>
        </div>
    );
}

Character.propTypes = {
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
};