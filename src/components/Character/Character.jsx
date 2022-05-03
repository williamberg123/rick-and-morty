import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './Character.css';

function Character({ name, species, imageUrl }){
    const handleClick = () => {
        console.log('DIV CLICADA');
    };

    return(
        <div onClick={handleClick} className="Character" data-testid="CharacterDiv">
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

export default memo(Character);