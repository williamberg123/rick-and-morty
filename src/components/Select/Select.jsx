import React from 'react';
import PropTypes from 'prop-types';

import './Select.css';

export default function Select({ funcChange }){
    return (
        <select className="Select" onChange={funcChange}>
            <option value="personagens">PERSONAGENS</option>
            <option value="episodios">EPISÓDIOS</option>
            <option value="ambientes">AMBIENTES</option>
        </select>
    );
}

Select.propTypes = {
    funcChange: PropTypes.func.isRequired
};