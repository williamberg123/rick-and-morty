import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './Select.css';

function Select({ funcChange }){
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

export default memo(Select);