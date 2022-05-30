import React, { memo, useContext } from 'react';

import AppContext from '../../AppContext';

import './style.css';

function Select(){
    const { handleChangeOption } = useContext(AppContext);

    return (
        <select className="Select" onChange={handleChangeOption}>
            <option value="personagens">PERSONAGENS</option>
            <option value="episodios">EPISÓDIOS</option>
            <option value="ambientes">AMBIENTES</option>
        </select>
    );
}

export default memo(Select);