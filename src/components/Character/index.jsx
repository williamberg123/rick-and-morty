import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Image from '../Image';

import './style.css';

function Character({ id, name, species, imageUrl }){
    return(
        <Link to={`/rick-and-morty/personagem?id=${id}`}>
            <div className="Character" data-testid="CharacterDiv">
                <Image
                    imageUrl={imageUrl}
                    altName={name}
                />
                <div className="shadow"></div>
                <div className="Character-info">
                    <h3>{name.toUpperCase()}</h3>
                    <p>{species}</p>
                </div>
            </div>
        </Link>
    );
}

Character.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
};

export default memo(Character);